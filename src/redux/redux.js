import { createSlice, configureStore } from "@reduxjs/toolkit";

const sliceGame = createSlice({
    name: 'game',
    initialState: {
        dice: 1,
        gameOn: false,
        winner: 0,
        players: [
            {
                id: 1,
                turn: true,
                current: 0,
                global: 0
            },
            {
                id: 2,
                turn: false,
                current: 0,
                global: 0
            }
        ]
    },
    reducers: {
        startNewGame: (state) => {
            state.gameOn = !state.gameOn
            state.winner = 0
            state.dice = 1
            state.players.forEach(player => {
                player.current = 0
                player.global = 0
            })
        },
        rollDice: (state) => {
            const dice = Math.ceil(Math.random() * 6)
            state.dice = dice
            if (dice > 1) {
                state.players.forEach(player => {
                    if (player.turn) {
                        player.current += dice
                    }
                })
            } else {
                state.players.forEach(player => {
                    if (player.turn) {
                        player.current = 0
                    }
                })
                sliceGame.caseReducers.switchTurn(state)
            }
        },
        holdDice: (state) => {
            state.players.forEach(player => {
                if (player.turn) {
                    player.global += player.current
                    player.current = 0
                }
                if (player.global >= 100) {
                    state.gameOn = !state.gameOn
                    state.winner = player.id
                }
            })

            sliceGame.caseReducers.switchTurn(state)

        },
        switchTurn: (state) => {
            state.players.forEach(player => player.turn = !player.turn)
        },
    }
})

//exports create-Actions
export const { rollDice, holdDice, startNewGame } = sliceGame.actions

//exports stores
export const store = configureStore({
    reducer: {
        game: sliceGame.reducer
    }
})