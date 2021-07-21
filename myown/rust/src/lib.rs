#![allow(dead_code)]

use regex::Regex;

/// Title: MAC-Address validation
/// Task: This function should validate the different MAC-Address format stated bellow
///       00:00:00:00:00:00
///       00-00-00-00-00-00
///       0000.0000.0000
///       000000000000
fn mac_address(mac: &str) -> Result<bool, regex::Error> {
    let re: Regex = Regex::new(r"^(?i:(?i:[a-f0-9]{2}[-]){5}[a-f0-9]{2}$)|(?i:(?i:[a-f0-9]{2}[:]){5}[a-f0-9]{2})|(?i:(?i:[a-z0-9]{4}[.]){2}[a-f0-9]{4})|(?i:[a-f0-9]{12})$")?;
    Ok(re.is_match(mac))
}

#[test]
fn validate_mac_address() {
    assert_eq!(mac_address("3D-C0-3D-63-39-51"), Ok(true));
    assert_eq!(mac_address("3D-Q0-3D-63-39-51"), Ok(false));
    assert_eq!(mac_address("c7-46-16-be-72-51"), Ok(true));
    assert_eq!(mac_address("a8:9f:44:41:56:6a"), Ok(true));
    assert_eq!(mac_address("79:8D:C5:DB:48:D0"), Ok(true));
    assert_eq!(mac_address("79:8D:C5:DB:48:P0"), Ok(false));
    assert_eq!(mac_address("79:8b:c5:db:48:d0"), Ok(true));
    assert_eq!(mac_address("10AB.A6Q7.28B0"), Ok(true));
    assert_eq!(mac_address("10AB.A657.28B0"), Ok(true));
    assert_eq!(mac_address("6cd0.5f1f.3780"), Ok(true));
    assert_eq!(mac_address("6cd0.5f1f.3780"), Ok(true));
    assert_eq!(mac_address("0c17f0284193"), Ok(true));
    assert_eq!(mac_address("11DE7CF2173D"), Ok(true));
    assert_eq!(mac_address("11DE7CF2173Q"), Ok(false));
}
