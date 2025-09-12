use std::{collections::HashMap, hash::Hash};

use actix_web::Route;
use libseptastic::{direction::CardinalDirection, route::RouteType};
use serde::{Deserialize, Serialize};
use sqlx::{Postgres, Transaction};

pub async fn get_route_by_id(
    id: String,
    transaction: &mut Transaction<'_, Postgres>,
) -> ::anyhow::Result<libseptastic::route::Route> {

    let row = sqlx::query!(
        r#"SELECT 
            id, 
            name, 
            short_name, 
            color_hex, 
            route_type as "route_type: libseptastic::route::RouteType"
        FROM 
            septa_routes
        WHERE 
            id = $1
        ;"#,
        id
    )
    .fetch_one(&mut **transaction)
    .await?;

    return Ok(libseptastic::route::Route {
        name: row.name,
        short_name: row.short_name,
        color_hex: row.color_hex,
        route_type: row.route_type,
        id: row.id,
    });
}

pub async fn get_direction_by_route_id(
    id: String,
    transaction: &mut Transaction<'_, Postgres>,
) -> ::anyhow::Result<Vec<libseptastic::direction::Direction>> {

    let rows = sqlx::query!(
        r#"SELECT 
            route_id,
            direction_id,
            direction as "direction: libseptastic::direction::CardinalDirection",
            direction_destination
        FROM 
            septa_directions
        WHERE 
            route_id = $1
        ;"#,
        id
    )
    .fetch_all(&mut **transaction)
    .await?;

    let mut res = Vec::new();

    for row in rows {
        res.push(libseptastic::direction::Direction{
            route_id: row.route_id,
            direction_id: row.direction_id,
            direction: row.direction,
            direction_destination: row.direction_destination
        });
    }

    return Ok(res);
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StopSchedule {
    pub route_id: String,
    pub stop_name: String,
    pub trip_id: String,
    pub service_id: String,
    pub direction_id: i64,
    pub arrival_time: i64,
    pub stop_id: i64,
    pub stop_sequence: i64
}


#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Trip {
    pub route_id: String,
    pub trip_id: String,
    pub direction_id: i64,
    pub schedule: Vec<StopSchedule>
}

pub async fn get_schedule_by_route_id(
    id: String,
    transaction: &mut Transaction<'_, Postgres>,
) -> ::anyhow::Result<Vec<Trip>> {

    let rows = sqlx::query!(
        r#"SELECT 
            septa_stop_schedules.route_id,
            septa_stops.name as stop_name,
            trip_id, 
            service_id, 
            septa_stop_schedules.direction_id,
            septa_directions.direction as "direction: libseptastic::direction::CardinalDirection", 
            arrival_time,
            stop_id,
            stop_sequence
        FROM 
            septa_stop_schedules
        INNER JOIN septa_directions
            ON 
                septa_directions.direction_id = septa_stop_schedules.direction_id
                AND
                septa_directions.route_id = septa_stop_schedules.route_id
        INNER JOIN septa_stops 
            ON septa_stops.id = septa_stop_schedules.stop_id
        WHERE 
            septa_stop_schedules.route_id = $1
            AND
            service_id IN (SELECT service_id FROM septa_schedule_days WHERE date = '20250707')
        ;"#,
        id
    )
    .fetch_all(&mut **transaction)
    .await?;

    let mut sched_groups: HashMap<String, Vec<StopSchedule>> = HashMap::new();
    for row in rows {
        let mut arr = match sched_groups.get_mut(&row.trip_id) {
            Some(x) => x,
            None => {
                sched_groups.insert(row.trip_id.clone(), Vec::new());
                sched_groups.get_mut(&row.trip_id).unwrap()
            }
        };

        arr.push(StopSchedule {
            route_id: row.route_id,
            stop_name: row.stop_name,
            trip_id: row.trip_id,
            service_id: row.service_id,
            direction_id: row.direction_id,
            arrival_time: row.arrival_time,
            stop_id: row.stop_id,
            stop_sequence: row.stop_sequence
        });
    }
    let mut res = Vec::new();

    for group in sched_groups {
        res.push(Trip{
            trip_id: group.0,
            route_id: group.1[0].route_id.clone(),
            schedule: group.1.clone(),
            direction_id: group.1[0].direction_id.clone()
        });
    }

    return Ok(res);
}

#[derive(Serialize,Deserialize,Clone)]
pub struct NTALive {
    delay: i64,
    cancelled: bool,
    next_stop: Option<String>
}

#[derive(Serialize,Deserialize)]
pub struct LiveData {
    route_id: String,
    service_id: String,
    trip_id: String,
    trip_headsign: String,
    direction_id: i64,
    block_id: String,
    start_time: String,
    end_time: String,
    delay: i64,
    status: String,
    lat: Option<String>,
    lon: Option<String>, 
    heading: Option<String>,
    next_stop_id: Option<i64>,
    next_stop_name: Option<String>,
    next_stop_sequence: Option<i64>,
    seat_availability: String,
    vehicle_id: String,
    timestamp: i64
}

#[derive(Serialize,Deserialize)]
pub struct NTAEntry {
    route_id: String,
    route_type: RouteType,
    route_name: String,
    color_hex: String,
    trip_id: String,
    arrival_time: i64, 
    direction: CardinalDirection,
    direction_destination: String,
    live: Option<NTALive>
}

#[derive(Serialize,Deserialize)]
pub struct NTAResult {
    station_name: String,
    arrivals: Vec<NTAEntry>
}

pub async fn get_nta_by_stop_id(
    ids: Vec<i64>,
    start_time: chrono::DateTime<chrono::Utc>,
    end_time: chrono::DateTime<chrono::Utc>,
    transaction: &mut Transaction<'_, Postgres>,
) -> ::anyhow::Result<NTAResult> {
    let local_start = start_time.with_timezone(&chrono_tz::America::New_York);
    let local_end = end_time.with_timezone(&chrono_tz::America::New_York);
    let local_midnight = chrono::Utc::now().with_timezone(&chrono_tz::America::New_York).date().and_hms(0,0,0);
    let start_secs = local_start.signed_duration_since(local_midnight).num_seconds();
    let end_secs = local_end.signed_duration_since(local_midnight).num_seconds();

    let name_row = sqlx::query!("SELECT name FROM septa_stops WHERE id = $1", ids[0]).fetch_one(&mut **transaction).await?;

    let stop_name = name_row.name;

    let rows: Vec<(String, RouteType, String, String, i64, CardinalDirection, String, String,)> = sqlx::query_as(
        r#"SELECT 
            septa_stop_schedules.route_id,
            route_type as "route_type: libseptastic::route::RouteType",
            septa_routes.color_hex,
            trip_id,
            arrival_time,
            septa_directions.direction as "direction: libseptastic::direction::CardinalDirection",
            septa_directions.direction_destination,
            septa_routes.name
        FROM
            septa_stop_schedules
        INNER JOIN septa_directions
            ON
                septa_directions.direction_id = septa_stop_schedules.direction_id
                AND
                septa_directions.route_id = septa_stop_schedules.route_id
        INNER JOIN septa_stops
            ON septa_stops.id = septa_stop_schedules.stop_id 
        INNER JOIN septa_routes 
            ON septa_routes.id = septa_stop_schedules.route_id
        WHERE
            (septa_stops.id = $1 OR septa_stops.id = $2)
            AND
            service_id IN (SELECT service_id FROM septa_schedule_days WHERE date = '20250707')
            AND 
            septa_stop_schedules.arrival_time > $3 
            AND 
            septa_stop_schedules.arrival_time < $4
        ORDER BY arrival_time
        ;"#)
        .bind(&ids[0])
        .bind(&ids.get(1).unwrap_or(&0))
        .bind(&start_secs)
        .bind(&end_secs)
    .fetch_all(&mut **transaction)
    .await?;

    let mut ntas: Vec<NTAEntry> = Vec::new();
    let mut live_map: HashMap<String, NTALive> = HashMap::new();

    let lives: Vec<LiveData> = reqwest::get("https://www3.septa.org/api/v2/trips/?route_id=AIR,CHW,LAN,NOR,TRE,WIL,WAR,MED,PAO,FOX,WTR,CYN").await?.json().await?;

    for live in lives {
        live_map.insert(live.route_id, NTALive { delay: live.delay, cancelled: live.status == "CANCELLED", next_stop: live.next_stop_name });
    }

    for row in rows {
        ntas.push(NTAEntry { 
            route_id: row.0.clone(),
            route_type: row.1,
            color_hex: row.2,
            trip_id: row.3,
            arrival_time: row.4,
            direction: row.5,
            direction_destination: row.6,
            route_name: row.7,
            live: match live_map.get(&row.0) {
                Some(x) => Some(x.clone()),
                None => None
            }
        });
    }

    return Ok(NTAResult{
        station_name: stop_name,
        arrivals: ntas
    });
}
