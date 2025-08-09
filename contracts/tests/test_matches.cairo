// Test for matches module
use crate::matches::{Match, MatchStorage, add_match, get_match, list_matches, update_match_status};
use crate::teams::Team;

#[test]
fn test_add_and_get_match() {
    let mut storage = MatchStorage::default();
    let team_a = Team { id: 1, name: 12345 };
    let team_b = Team { id: 2, name: 67890 };
    add_match(ref storage, 1, team_a, team_b, 1000, 2000);
    let match_obj = get_match(ref storage, 1);
    assert(match_obj.id == 1, 'Match ID mismatch');
    assert(match_obj.team_a.id == 1, 'Team A ID mismatch');
    assert(match_obj.team_b.id == 2, 'Team B ID mismatch');
}

#[test]
fn test_list_matches() {
    let mut storage = MatchStorage::default();
    let team_a = Team { id: 1, name: 12345 };
    let team_b = Team { id: 2, name: 67890 };
    add_match(ref storage, 1, team_a, team_b, 1000, 2000);
    add_match(ref storage, 2, team_b, team_a, 2000, 3000);
    let ids = list_matches(ref storage);
    assert(ids.len() == 2, 'Match count mismatch');
}

#[test]
fn test_update_match_status() {
    let mut storage = MatchStorage::default();
    let team_a = Team { id: 1, name: 12345 };
    let team_b = Team { id: 2, name: 67890 };
    add_match(ref storage, 1, team_a, team_b, 1000, 2000);
    update_match_status(ref storage, 1, 2);
    let match_obj = get_match(ref storage, 1);
    assert(match_obj.status == 2, 'Match status mismatch');
}
