#[derive(sqlx::Type, PartialEq, Debug, Clone)]
#[sqlx(type_name = "septa_route_type", rename_all = "snake_case")]
pub enum RouteType {
    Trolley,
    SubwayElevated,
    RegionalRail,
    Bus,
    TracklessTrolley
}

#[derive(sqlx::Type, PartialEq, Debug, Clone)]
#[sqlx(type_name = "septa_direction_type", rename_all = "snake_case")]
pub enum CardinalDirection {
    Northbound,
    Southbound,
    Eastbound,
    Westbound // (and down)
}

#[derive(Debug, Clone)]
pub struct Directional {
    pub direction: CardinalDirection,
    pub direction_destination: String
}


#[derive(Debug, Clone)]
pub struct RouteDirectional {
    pub primary: Directional, // 0
    pub secondary: Directional, // 1
}

#[derive(Debug, Clone)]
pub struct Route {
    pub name: String,
    pub short_name: String,
    pub color_hex: String,
    pub route_type: RouteType,
    pub id: String,
    pub directional: RouteDirectional
}
