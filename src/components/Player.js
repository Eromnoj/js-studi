import React from 'react'

function Player(props) {
    const {id, turn, current, global, winner} = props

    const styleGlow = (color) => {
      return {
        filter: winner === id ? "drop-shadow(0 0 1.2rem #d3fcd5)" : turn && winner === 0 ? `drop-shadow(0 0 0.7rem ${color})` : "none"
    }
    }

    const colorRange = (value) => {
      return 120 * value / 100
    }

    const stylesScore = {
      ...styleGlow(`hsl(${colorRange(global)}, 100%, 50% )`),
      color: `hsl(${colorRange(global)}, 100%, 50% )`
    } 

    const styleCurrent = {
      ...styleGlow('#ee0f73'),
      backgroundColor: winner === id ? '#ee0f73' : turn && winner === 0 ? '#ee0f73' : '#a6f1a8' 
    }

  return (
    <div className='player' style={styleGlow('#dd5e98')}>
        <div className='playerName' style={styleGlow('#d3fcd5')}>
          <h2>Player {id}</h2>
        </div>
        <div className='globalScore' style={stylesScore}>
          <p>{global}</p>
        </div>
        <div className='current' style={styleCurrent}>
          <h3 className='currentTitle'>Current</h3>
          <p className='currentScore'>{current}</p>
        </div>
      </div>
  )
}

export default Player

