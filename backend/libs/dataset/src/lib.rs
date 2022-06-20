//! Datasets shared library

#![deny(missing_docs)]

use timeseries::TimeSerie;

/// Dataset connector
///
/// Essentially, this returns a time-serie of data.
pub trait Connector<T> {
    /// Returns a time serie from the dataset
    fn get_serie(id: &str) -> TimeSerie<T>;
}
