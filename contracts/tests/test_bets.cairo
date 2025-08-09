// Test for bets module
use crate::bets::{Bet, BetStorage, place_bet, get_bet, list_bets};

#[test]
fn test_place_and_get_bet() {
    let mut storage = BetStorage::default();
    place_bet(ref storage, 1, 123, 456, 1000, 1);
    let bet = get_bet(ref storage, 1);
    assert(bet.user == 123, 'User ID mismatch');
    assert(bet.match_id == 456, 'Match ID mismatch');
    assert(bet.amount == 1000, 'Bet amount mismatch');
    assert(bet.outcome == 1, 'Bet outcome mismatch');
}

#[test]
fn test_list_bets() {
    let mut storage = BetStorage::default();
    place_bet(ref storage, 1, 123, 456, 1000, 1);
    place_bet(ref storage, 2, 124, 457, 2000, 2);
    let ids = list_bets(ref storage);
    assert(ids.len() == 2, 'Bet count mismatch');
}
