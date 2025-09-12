use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StopSchedule {
    pub route_id: String,
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
