// Teams module: data structures and team-related logic

pub struct Team {
    id: felt252,
    name: felt252,
}

use starknet::storage::Map;

#[storage]
struct TeamStorage {
    teams: Map<felt252, Team>,
    team_ids: Map<usize, felt252>, // index -> team_id
    team_count: usize,
}

fn add_team(ref storage: TeamStorage, id: felt252, name: felt252) {
    let team_obj = Team { id, name };
    storage.teams.write(id, team_obj);
    let count = storage.team_count.read();
    storage.team_ids.write(count, id);
    storage.team_count.write(count + 1);
}

fn get_team(ref storage: TeamStorage, id: felt252) -> Team {
    storage.teams.read(id)
}

fn list_teams(ref storage: TeamStorage) -> Array<felt252> {
    let mut ids = ArrayTrait::new();
    let count = storage.team_count.read();
    let mut i: usize = 0;
    while i != count {
        let id = storage.team_ids.read(i);
        ids.append(id);
        i += 1;
    }
    ids
}
