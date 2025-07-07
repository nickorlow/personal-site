use super::route::CardinalDirection;

#[derive(Debug, Clone)]
pub struct StopSchedule {
    pub route_id: String,
    pub trip_id: String,
    pub service_id: String,
    pub direction: CardinalDirection,
    pub arrival_time: i64,
    pub stop_id: i64,
    pub stop_sequence: i64
}
