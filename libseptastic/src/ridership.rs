use serde::{Deserialize, Serialize};

use crate::direction::CardinalDirection;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Ridership {
    pub route_id: String,
    pub stop_id: i64,
    pub direction: CardinalDirection,
    pub exp_ons: i64,
    pub exp_offs: i64,
    pub ons: i64,
    pub offs: i64,
    pub year: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LineRidership {
    pub route_id: String,
    pub unlinked_trips: i64
}
