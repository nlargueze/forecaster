//! API router

use axum::{routing::get, Router};

use crate::routes::root::root_handler;

/// Initializes the router
pub fn init() -> Router {
    Router::new()
        // `GET /` goes to `root`
        .route("/", get(root_handler))
    // `POST /users` goes to `create_user`
    // .route("/users", post(create_user));
}
