import './App.sass';
// import { useState } from 'react'
import Player from './components/Player'
import Dice from './components/Dice'
import { useSelector, useDispatch } from 'react-redux'
import { startNewGame } from './redux';

function App() {
  const game = useSelector(state => state.game)
  const dispatch = useDispatch()
  // console.log(game)
  
  const players = game.players.map(item => <Player
    key={item.id}
    id={item.id}
    turn={item.turn}
    current={item.current}
    global={item.global}
  />)


  return (
    <div className="App">
      {players}
      {game.winner === 0 ? 
      <Dice /> : 
      <div className='winner'>
        <h3>Player {game.winner} Wins !!!</h3>
        <button className='winner' onClick={() => dispatch(startNewGame())}>New Game</button>  
      </div>}
      

    </div>
  );
}

export default App;
