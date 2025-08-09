// Matches module: data structures and match-related logic

use crate::teams::Team;

pub struct Match {
    id: felt252,
    team_a: Team,
    team_b: Team,
    start_time: felt252,
    end_time: felt252,
    status: felt252, // 0: scheduled, 1: ongoing, 2: finished
}

use starknet::storage::Map;

#[storage]
struct MatchStorage {
    matches: Map<felt252, Match>,
    match_ids: Map<usize, felt252>, // index -> match_id
    match_count: usize,
}

fn add_match(ref storage: MatchStorage, id: felt252, team_a: Team, team_b: Team, start_time: felt252, end_time: felt252) {
    let match_obj = Match { id, team_a, team_b, start_time, end_time, status: 0 };
    storage.matches.write(id, match_obj);
    let count = storage.match_count.read();
    storage.match_ids.write(count, id);
    storage.match_count.write(count + 1);
}

fn get_match(ref storage: MatchStorage, id: felt252) -> Match {
    storage.matches.read(id)
}

fn list_matches(ref storage: MatchStorage) -> Array<felt252> {
    let mut ids = ArrayTrait::new();
    let count = storage.match_count.read();
    let mut i: usize = 0;
    while i != count {
        let id = storage.match_ids.read(i);
        ids.append(id);
        i += 1;
    }
    ids
}

fn update_match_status(ref storage: MatchStorage, id: felt252, status: felt252) {
    let mut match_obj = storage.matches.read(id);
    match_obj.status = status;
    storage.matches.write(id, match_obj);
}
