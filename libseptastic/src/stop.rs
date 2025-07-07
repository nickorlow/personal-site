#[derive(sqlx::Type, PartialEq, Debug, Clone)]
#[sqlx(type_name = "septa_stop_type", rename_all = "snake_case")]
pub enum StopType {
    FarSide,
    MiddleBlockNearSide,
    Normal
}

#[derive(Debug, Clone)]
pub struct Stop {
    pub id: i64,
    pub name: String,
    pub lat: f64,
    pub lng: f64,
    pub stop_type: StopType
}
