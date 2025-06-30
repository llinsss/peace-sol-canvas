// filepath: /peace-sol-canvas/peace-sol-canvas/smart-contract/src/lib.rs
use anchor_lang::prelude::*;

declare_id!("YourSmartContractProgramID");

#[program]
pub mod peace_sol_canvas {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let state = &mut ctx.accounts.state;
        state.owner = *ctx.accounts.user.key;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32)]
    pub state: Account<'info, State>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct State {
    pub owner: Pubkey,
}