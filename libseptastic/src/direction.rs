
use serde::{Deserialize, Serialize};

#[derive(sqlx::Type, Serialize, Deserialize, PartialEq, Debug, Clone)]
#[sqlx(type_name = "septa_direction_type", rename_all = "snake_case")]
pub enum CardinalDirection {
    Northbound,
    Southbound,
    Eastbound,
    Westbound,
    Inbound,
    Outbound,
    Loop
}

#[derive(::sqlx::Decode, Serialize, Deserialize, Debug, Clone)]
pub struct Direction {
    pub route_id: String,
    pub direction_id: i64,
    pub direction: CardinalDirection,
    pub direction_destination: String
}

impl std::fmt::Display for CardinalDirection {
    fn fmt (&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let output = match self {
            CardinalDirection::Northbound => "Northbound",
            CardinalDirection::Southbound => "Southbound",
            CardinalDirection::Eastbound => "Eastbound",
            CardinalDirection::Westbound => "Westbound",
            CardinalDirection::Inbound => "Inbound",
            CardinalDirection::Outbound => "Outbound",
            CardinalDirection::Loop => "Loop"
        };
        std::write!(f, "{}", output)
    }
}
