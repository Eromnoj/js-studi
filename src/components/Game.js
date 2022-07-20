import React from 'react'
import Player from './Player'
import Dice from './Dice'
import { useSelector, useDispatch } from 'react-redux'
import { startNewGame } from '../redux/redux'

function Game() {

    const game = useSelector(state => state.game) // Import game slice from Redux-toolkit conf file 
    const dispatch = useDispatch() 
    // Creating the 2 players' display maping from game and using Player component
    const players = game.players.map(item => <Player 
        key={item.id}
        id={item.id}
        turn={item.turn}
        current={item.current}
        global={item.global}
        winner={game.winner}
    />)
    return (
        <>
            {players}
            {/* Ternary to display dice or winning prompt */}
            {game.winner === 0 ?
                <Dice /> :
                <div className='winner centerDiv'>
                    <h3>Joueur {game.winner} Gagne la Partie !!!</h3>
                    <button id='startWin' className='winnerButton' aria-label='Nouvelle partie' onClick={() => dispatch(startNewGame())}>Nouvelle partie</button>
                </div>}
        </>
    )
}

export default Game