use serde::{Deserialize, Serialize};

#[derive(sqlx::Type, Serialize, Deserialize, PartialEq, Debug, Clone)]
#[sqlx(type_name = "septa_route_type", rename_all = "snake_case")]
pub enum RouteType {
    Trolley,
    SubwayElevated,
    RegionalRail,
    Bus,
    TracklessTrolley
}

#[derive(::sqlx::FromRow, Serialize, Deserialize, Debug, Clone)]
pub struct Route {
    pub name: String,
    pub short_name: String,
    pub color_hex: String,
    pub route_type: RouteType,
    pub id: String
}
