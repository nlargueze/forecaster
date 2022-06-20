//! API server
//!
//! # Overview
//!
//! # Environment variable
//!
//! - PORT: server port

use std::{env, net::SocketAddr};

use dotenv::dotenv;

#[tokio::main]
async fn main() {
    // load .env vars
    dotenv().ok();

    // // initialize tracing
    // tracing_subscriber::fmt::init();

    // build our application with a route
    let app = api::router::init();

    // run our app with hyper
    let port = env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse::<u16>()
        .expect("Invalid port");
    let addr = SocketAddr::from(([127, 0, 0, 1], port));

    // start the server
    eprintln!("Listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
