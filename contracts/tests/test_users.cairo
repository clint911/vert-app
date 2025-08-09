// Test for users module
use crate::users::{User, UserStorage, add_user, get_user, list_users};

#[test]
fn test_add_and_get_user() {
    let mut storage = UserStorage::default();
    add_user(ref storage, 1, 12345, 1000);
    let user = get_user(ref storage, 1);
    assert(user.id == 1, 'User ID mismatch');
    assert(user.username == 12345, 'Username mismatch');
    assert(user.usdt_balance == 1000, 'USDT balance mismatch');
}

#[test]
fn test_list_users() {
    let mut storage = UserStorage::default();
    add_user(ref storage, 1, 12345, 1000);
    add_user(ref storage, 2, 67890, 2000);
    let ids = list_users(ref storage);
    assert(ids.len() == 2, 'User count mismatch');
}
