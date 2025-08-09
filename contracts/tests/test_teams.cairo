use crate::teams::{Team, TeamStorage, add_team, get_team, list_teams};

#[test]
fn test_add_and_get_team() {
    let mut storage = TeamStorage::default();
    add_team(ref storage, 1, 12345);
    let team = get_team(ref storage, 1);
    assert(team.id == 1, 'Team ID mismatch');
    assert(team.name == 12345, 'Team name mismatch');
}

#[test]
fn test_list_teams() {
    let mut storage = TeamStorage::default();
    add_team(ref storage, 1, 12345);
    add_team(ref storage, 2, 67890);
    let ids = list_teams(ref storage);
    assert(ids.len() == 2, 'Team count mismatch');
}