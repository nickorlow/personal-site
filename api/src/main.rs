use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use env_logger::Env;
use log::*;
use dotenv::dotenv;
use serde_json::json;

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().json("{}")
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

    let mut transaction = pool.begin().await?;
    HttpServer::new(|| {
        App::new()
            .service(hello)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await?;

    Ok(())
}
