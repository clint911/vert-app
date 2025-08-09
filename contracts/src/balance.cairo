// Balance and contract interface module

fn place_bet(user: felt252, match_id: felt252, amount: felt252, outcome: felt252) {
    // Place bet logic here
}

#[starknet::interface]
pub trait ISBContract<TContractState> {
    fn increase_balance(ref self: TContractState, amount: felt252);
    fn get_balance(self: @TContractState) -> felt252;
    fn list_team_ids(self: @TContractState) -> Array<felt252>;
    fn list_match_ids(self: @TContractState) -> Array<felt252>;
}

#[starknet::contract]
pub mod SBContract {
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess, Map};
    use crate::teams::Team;
    use crate::matches::Match;

    #[storage]
    struct Storage {
        balance: felt252,
        team_ids: LegacyMap<usize, felt252>,
        team_count: usize,
        match_ids: LegacyMap<usize, felt252>,
        match_count: usize,
    }

    #[abi(embed_v0)]
    impl SBContractImpl of super::ISBContract<ContractState> {
        fn increase_balance(ref self: ContractState, amount: felt252) {
            assert(amount != 0, 'Amount cannot be 0');
            self.balance.write(self.balance.read() + amount);
        }

        fn get_balance(self: @ContractState) -> felt252 {
            self.balance.read()
        }

        fn list_team_ids(self: @ContractState) -> Array<felt252> {
            let mut ids = ArrayTrait::new();
            let count = self.team_count.read();
            let mut i: usize = 0;
            while i != count {
                let id = self.team_ids.read(i);
                ids.append(id);
                i += 1;
            }
            ids
        }

        fn list_match_ids(self: @ContractState) -> Array<felt252> {
            let mut ids = ArrayTrait::new();
            let count = self.match_count.read();
            let mut i: usize = 0;
            while i != count {
                let id = self.match_ids.read(i);
                ids.append(id);
                i += 1;
            }
            ids
        }
    }
}
