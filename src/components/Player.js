import React from 'react'

function Player(props) {
    const {id, turn, current, global} = props

    const stylesPlayer = {
        // border: turn ? "5px solid #dd5e98" : "none",
        filter: turn ? "drop-shadow(0 0 0.7rem #dd5e98)" : "none"
    }

    const colorRange = (value) => {
      return 120 * value / 100
    }

    const stylesScore = {
      color: `hsl(${colorRange(global)}, 100%, 50% )`
    } 

  return (
    <div className='player' style={stylesPlayer}>
        <div className='playerName'>
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

