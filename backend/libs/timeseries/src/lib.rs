//! Time series

use std::{
    collections::BTreeMap,
    ops::{Deref, DerefMut},
};

pub use time::OffsetDateTime;

/// A time serie
pub struct TimeSerie<T> {
    /// TimeSerie datapoints
    datapoints: BTreeMap<OffsetDateTime, T>,
}

impl<T> TimeSerie<T> {
    /// Creates a new empty time serie
    pub fn new() -> Self {
        TimeSerie {
            datapoints: BTreeMap::new(),
        }
    }
}

impl<T> Default for TimeSerie<T> {
    fn default() -> Self {
        Self::new()
    }
}

impl<T> Deref for TimeSerie<T> {
    type Target = BTreeMap<OffsetDateTime, T>;

    fn deref(&self) -> &Self::Target {
        &self.datapoints
    }
}

impl<T> DerefMut for TimeSerie<T> {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.datapoints
    }
}
