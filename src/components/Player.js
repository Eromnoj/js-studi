import React from 'react'

function Player(props) {
    const {id, turn, current, global, winner} = props

    // const stylesPlayer = {
    //     // border: turn ? "5px solid #dd5e98" : "none",
    //     filter: winner === id ? "drop-shadow(0 0 1.2rem #d3fcd5)" : turn && winner === 0 ? "drop-shadow(0 0 0.7rem #dd5e98)" : "none"
    // }

    const styleGlow = (color) => {
      return {
        // border: turn ? "5px solid #dd5e98" : "none",
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

  return (
    <div className='player' style={styleGlow('#dd5e98')}>
        <div className='playerName' style={styleGlow('#d3fcd5')}>
          <h2>Player {id}</h2>
        </div>
        <div className='globalScore' style={stylesScore}>
          <p>{global}</p>
        </div>
        <div className='current'>
          <h3 className='currentTitle'>Current</h3>
          <p className='currentScore'>{current}</p>
        </div>
      </div>
  )
}

export default Player

