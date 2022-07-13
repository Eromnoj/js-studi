import React from 'react'

function Player(props) {
    const {id, turn, current, global} = props

    const styles = {
        border: turn ? "2px solid #d3c2c2" : "none"
    }
  return (
    <div className='player' style={styles}>
        <div className='playerName'>
          <h2>Player {id}</h2>
        </div>
        <div className='globalScore'>
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

