use super::route::CardinalDirection;

#[derive(Debug, Clone)]
pub struct RouteStop {
    pub route_id: String,
    pub stop_id: i64,
    pub direction: CardinalDirection,
    pub stop_sequence: i64
}
