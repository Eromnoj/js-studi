import React from 'react'

function Player(props) {
    const {id, turn, current, global, winner} = props
    //strings for accessibility
    let ariaGlobalScore = `Score global du joueur ${id}`
    let ariaCurrentScore = `Cumul du tour du joueur ${id}`

    //Functions for conditionnal rendering :
      //Glow or not player's elements depending on : turn to play || winning the game
      // return an object used in 'style' attribute 
    const styleGlow = (color) => {
      return {
        filter: winner === id ? "drop-shadow(0 0 1.2rem #d3fcd5)" : turn && winner === 0 ? `drop-shadow(0 0 0.7rem ${color})` : "none"
    }
    }
      //Change the global score color Red for 0 Green for 100pts using HSL
        // Function to create de range of color depending on the score
    const colorRange = (value) => {
      return 120 * value / 100
    }
        // Variable applying the color range and using styleGlow() for conditionnal display
    const stylesScore = {
      ...styleGlow(`hsl(${colorRange(global)}, 100%, 50% )`),
      color: `hsl(${colorRange(global)}, 100%, 50% )`
    } 
      // Change Current score color and display 
    const styleCurrent = {
      ...styleGlow('#ee0f73'),
      backgroundColor: winner === id ? '#d3fcd5' : turn && winner === 0 ? '#ee0f73' : '#a6f1a8' 
    }

  return (
    <div className='player' style={styleGlow('#dd5e98')}>
        <div className='playerName' style={styleGlow('#d3fcd5')}>
          <h2>Joueur {id}</h2>
        </div>
        <div className='globalScore' aria-label={ariaGlobalScore} style={stylesScore}>
          <p>{global}</p>
        </div>
        <div className='current' style={styleCurrent}>
          <h3 className='currentTitle'>Cumul</h3>
          <p className='currentScore' aria-label={ariaCurrentScore}>{current}</p>
        </div>
      </div>
  )
}

export default Player

