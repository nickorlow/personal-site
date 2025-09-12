#[derive(Debug, Clone)]
pub struct RouteStop {
    pub route_id: String,
    pub stop_id: i64,
    pub direction_id: i64,
    pub stop_sequence: i64
}
