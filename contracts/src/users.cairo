// Users module: data structures and user-related logic

struct User {
    id: felt252,
    username: felt252,
    usdt_balance: felt252,
}

use starknet::storage::{Map, StoragePointerReadAccess, StoragePointerWriteAccess};

#[storage]
struct UserStorage {
    users: Map<felt252, User>, // user_id -> User
    user_ids: Map<usize, felt252>, // index -> user_id
    user_count: usize,
}

fn add_user(ref storage: UserStorage, id: felt252, username: felt252, usdt_balance: felt252) {
    let user_obj = User { id, username, usdt_balance };
    storage.users.write(id, user_obj);
    let count = storage.user_count.read();
    storage.user_ids.write(count, id);
    storage.user_count.write(count + 1);
}

fn get_user(ref storage: UserStorage, id: felt252) -> User {
    storage.users.read(id)
}

fn list_users(ref storage: UserStorage) -> Array<felt252> {
    let mut ids = ArrayTrait::new();
    let count = storage.user_count.read();
    let mut i: usize = 0;
    while i != count {
        let id = storage.user_ids.read(i);
        ids.append(id);
        i += 1;
    }
    ids
}
