use actix_web::{get, web::{self, Data}, App, HttpResponse, HttpServer, Responder};
use chrono::TimeDelta;
use database::{get_direction_by_route_id, get_nta_by_stop_id, get_schedule_by_route_id};
use env_logger::Env;
use libseptastic::{direction::Direction};
use database::{Trip, StopSchedule}; 
use log::*;
use dotenv::dotenv;
use std::{cmp::Ordering, collections::BTreeMap, sync::Arc};
use askama::Template;
use serde::{Serialize};

mod database;

struct AppState {
    database: ::sqlx::postgres::PgPool
}


async fn get_route_by_id(id: String, state: Data<Arc<AppState>>) -> ::anyhow::Result<libseptastic::route::Route> {
    Ok(database::get_route_by_id(id, &mut state.database.begin().await?).await?)
}


#[derive(Debug, Serialize)]
pub struct TimetableStopRow {
    pub stop_id: i64,
    pub stop_name: String,
    pub stop_sequence: i64,
    pub times: Vec<Option<i64>>, // one per trip, None if trip doesn't stop
}

#[derive(Debug, Serialize)]
pub struct TimetableDirection {
    pub direction: Direction,
    pub trip_ids: Vec<String>, // column headers
    pub rows: Vec<TimetableStopRow>, // one per unique stop
}

pub fn build_timetables(
    directions: &[Direction],
    trips: &[Trip],
) -> Vec<TimetableDirection> {
    let mut results = Vec::new();

    for direction in directions {
        let mut direction_trips: Vec<&Trip> = trips
            .iter()
            .filter(|trip| trip.direction_id == direction.direction_id)
            .collect();
direction_trips.sort_by_key(|trip| {
    trip.schedule
        .iter()
        .filter_map(|s| Some(s.arrival_time))
        .min()
        .unwrap_or(i64::MAX)
});

        let trip_ids: Vec<String> = direction_trips
            .iter()
            .map(|t| t.trip_id.clone())
            .collect();

        // Map of stop_id -> (stop_sequence, Vec<Option<arrival_time>>)
        let mut stop_map: BTreeMap<i64, (i64, String, Vec<Option<i64>>)> = BTreeMap::new();

        for (trip_index, trip) in direction_trips.iter().enumerate() {
            for stop in &trip.schedule {
                let entry = stop_map
                    .entry(stop.stop_id)
                    .or_insert((stop.stop_sequence, stop.stop_name.clone(), vec![None; direction_trips.len()]));

                // If this stop_id appears in multiple trips with different sequences, keep the lowest
                entry.0 = entry.0.max(stop.stop_sequence);
                entry.1 = stop.stop_name.clone();
                entry.2[trip_index] = Some(stop.arrival_time);
            }
        }

        let mut rows: Vec<TimetableStopRow> = stop_map
            .into_iter()
            .map(|(stop_id, (stop_sequence, stop_name, times))| TimetableStopRow {
                stop_id,
                stop_sequence,
                stop_name, 
                times,
            })
            .collect();

        rows.sort_by(| a, b|  { 
            if a.stop_sequence < b.stop_sequence {
                Ordering::Less
            } else {
                Ordering::Greater
            }
        });


        results.push(TimetableDirection {
            direction: direction.clone(),
            trip_ids,
            rows,
        });
    }

    results
}

mod filters {
    pub fn format_time(
        seconds: &i64,
        _: &dyn askama::Values,
    ) -> askama::Result<String> {
        let total_minutes = seconds / 60;
        let (hours, ampm) = {
            let hrs = total_minutes / 60;
            if hrs > 12 {
                (hrs - 12, "PM")
            } else {
                (hrs, "AM")
            }
        };
        let minutes = total_minutes % 60;
        Ok(format!("{}:{:02} {}", hours, minutes, ampm))
    }
}

#[derive(askama::Template)]
#[template(path = "layout.html")]
struct ContentTemplate<T: askama::Template> {
    content: T,
    page_title: Option<String>,
    page_desc: Option<String>,
}

#[derive(askama::Template)]
#[template(path = "route.html")]
struct RouteTemplate {
    route: libseptastic::route::Route,
    directions: Vec<libseptastic::direction::Direction>,
    timetables: Vec<TimetableDirection>
}

#[derive(askama::Template)]
#[template(path = "routes.html")]
struct RoutesTemplate {
}

#[derive(askama::Template)]
#[template(path = "index.html")]
struct IndexTemplate {
}

#[get("/routes")]
async fn get_routes() -> impl Responder {

        HttpResponse::Ok().body(ContentTemplate {
            page_title: None,
            page_desc: None,
            content: RoutesTemplate {}
        }.render().unwrap())
}

#[get("/")]
async fn get_index() -> impl Responder {

        HttpResponse::Ok().body(ContentTemplate {
            page_title: None,
            page_desc: None,
            content: IndexTemplate {}
        }.render().unwrap())
}

#[get("/route/{route_id}")]
async fn get_route(state: Data<Arc<AppState>>, path: web::Path<(String)>) -> impl Responder {
    let route_id = path.into_inner();
    let route_r = get_route_by_id(route_id.clone(), state.clone()).await;
    let directions = get_direction_by_route_id(route_id.clone(), &mut state.database.begin().await.unwrap()).await.unwrap();
    let trips = get_schedule_by_route_id(route_id, &mut state.database.begin().await.unwrap()).await.unwrap();
    if let Ok(route) = route_r {
        HttpResponse::Ok().body(ContentTemplate {
            page_title: None,
            page_desc: None,
            content: RouteTemplate {
                route,
                directions: directions.clone(),
                timetables: build_timetables(directions.as_slice(), trips.as_slice())
            }
        }.render().unwrap())
    } else {
        HttpResponse::InternalServerError().body("Error")
    }
}

#[get("/api/route/{route_id}")]
async fn api_get_route(state: Data<Arc<AppState>>, path: web::Path<(String)>) -> impl Responder {
    let route_id = path.into_inner();
    let route_r = get_route_by_id(route_id, state).await;
    if let Ok(route) = route_r {
        HttpResponse::Ok().json(route)
    } else {
        HttpResponse::InternalServerError().body("Error")
    }
}

#[get("/api/route/{route_id}/schedule")]
async fn api_get_schedule(state: Data<Arc<AppState>>, path: web::Path<(String)>) -> impl Responder {
    let route_id = path.into_inner();
    let route_r = get_schedule_by_route_id(route_id,  &mut state.database.begin().await.unwrap()).await;
    if let Ok(route) = route_r {
        HttpResponse::Ok().json(route)
    } else {
        HttpResponse::InternalServerError().body("Error")
    }
}

#[get("/api/stop/{stop_id}/nta")]
async fn api_get_nta(state: Data<Arc<AppState>>, path: web::Path<(String)>) -> impl Responder {
    let route_id = path.into_inner().split(',') .map(|s| s.parse::<i64>()) 
        .collect::<Result<Vec<i64>, _>>().unwrap();
    let route_r = get_nta_by_stop_id(route_id, chrono::Utc::now(), chrono::Utc::now() + TimeDelta::minutes(30), &mut state.database.begin().await.unwrap()).await;
    if let Ok(route) = route_r {
        HttpResponse::Ok().json(route)
    } else {
        HttpResponse::InternalServerError().body(format!("Error {:?}", route_r.err()))
    }
}

#[actix_web::main]
async fn main() -> ::anyhow::Result<()> {
     env_logger::init_from_env(Env::default().default_filter_or("septastic_api=info"));
    dotenv().ok();

    let version: &str = option_env!("CARGO_PKG_VERSION").expect("Expected package version");
    info!("Starting SEPTASTIC Server v{} (commit: {})", version, "NONE");

    info!("Connecting to postgres database");

    let connection_string =
        std::env::var("DB_CONNSTR").expect("Expected database connection string");

    let pool = ::sqlx::postgres::PgPoolOptions::new()
        .max_connections(5)
        .connect(&connection_string)
        .await?;

    let state = Arc::new(AppState {
        database: pool 
    });

    HttpServer::new(move || {
        App::new()
            .wrap(actix_cors::Cors::permissive()) 
            .app_data(Data::new(state.clone()))
            .service(api_get_route)
            .service(api_get_schedule)
            .service(api_get_nta)
            .service(get_route)
            .service(get_routes)
            .service(get_index)
            .service(actix_files::Files::new("/assets", "./assets"))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await?;

    Ok(())
}
