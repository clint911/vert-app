// Payments module: USDT integration using OpenZeppelin ERC20 interface

use openzeppelin::token::erc20::IERC20;
use starknet::ContractAddress;

// Replace with actual USDT contract address on Starknet mainnet
const USDT_CONTRACT_ADDRESS: ContractAddress = ContractAddress::from_felt(0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d);

// Get USDT balance for a user
fn get_usdt_balance(user: ContractAddress) -> u256 {
    IERC20::balance_of(USDT_CONTRACT_ADDRESS, user)
}

// Deposit USDT (user must approve contract first)
fn deposit_usdt(user: ContractAddress, amount: u256) {
    // Transfers USDT from user to contract
    IERC20::transfer_from(USDT_CONTRACT_ADDRESS, user, CONTRACT_ADDRESS, amount);
}

// Withdraw USDT to user
fn withdraw_usdt(user: ContractAddress, amount: u256) {
    IERC20::transfer(USDT_CONTRACT_ADDRESS, user, amount);
}
