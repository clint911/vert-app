// Bets module: data structures and bet-related logic

struct Bet {
    user: felt252,
    match_id: felt252,
    amount: felt252,
    outcome: felt252,
    resolved: bool,
    payout: felt252,
}

use starknet::storage::Map;

#[storage]
struct BetStorage {
    bets: Map<felt252, Bet>, // bet_id -> Bet
    bet_ids: Map<usize, felt252>, // index -> bet_id
    bet_count: usize,
}

fn place_bet(ref storage: BetStorage, bet_id: felt252, user: felt252, match_id: felt252, amount: felt252, outcome: felt252) {
    let bet_obj = Bet { user, match_id, amount, outcome, resolved: false, payout: 0 };
    storage.bets.write(bet_id, bet_obj);
    let count = storage.bet_count.read();
    storage.bet_ids.write(count, bet_id);
    storage.bet_count.write(count + 1);
}

fn get_bet(ref storage: BetStorage, bet_id: felt252) -> Bet {
    storage.bets.read(bet_id)
}

fn list_bets(ref storage: BetStorage) -> Array<felt252> {
    let mut ids = ArrayTrait::new();
    let count = storage.bet_count.read();
    let mut i: usize = 0;
    while i != count {
        let id = storage.bet_ids.read(i);
        ids.append(id);
        i += 1;
    }
    ids
}
