import React, { useRef } from 'react'
import { FaUndo, FaRegStopCircle, FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { rollDice, holdDice, startNewGame } from '../redux'
import { gsap } from 'gsap'

function Dice() {
  // const {value} = props
  const diceRef = useRef()

  const gameOn = useSelector(state => state.game.gameOn)
  const value = useSelector(state => state.game.dice)
  const dispatch = useDispatch()
  let diceFace
  switch (value) {
    case 1:
      diceFace = <FaDiceOne className='diceFaceIcon'/>
      break;
    case 2:
      diceFace = <FaDiceTwo className='diceFaceIcon' />
      break;
    case 3:
      diceFace = <FaDiceThree className='diceFaceIcon' />
      break;
    case 4:
      diceFace = <FaDiceFour className='diceFaceIcon' />
      break;
    case 5:
      diceFace = <FaDiceFive className='diceFaceIcon' />
      break;
    case 6:
      diceFace = <FaDiceSix className='diceFaceIcon' />
      break;

    default:
      break;
  }

  const rotateDice = () => {
    gsap.to(diceRef.current, { rotation: "+=1080", duration: 1}) 
    setTimeout(()=> {
      dispatch(rollDice())
    }, 700)
  }

  return (
    <div className='buttonDiv'>
      {gameOn ?
        <div className='dice'>
          <div className='diceFace' ref={diceRef}>
            {diceFace}
          </div>
          <div className='rollHoldDiv'>
            <button className='roll' onClick={() => rotateDice()}><FaUndo />  Roll</button>
            <button className='hold' onClick={() => dispatch(holdDice())}><FaRegStopCircle />  Hold</button>
          </div>
        </div> :
        <div className='rules'>
          <ul>
            <li>Roll the dice to make points</li>
            <li>Hold to save your points and pass your turn</li>
            <li>If you roll a 1, you loose all your current points, and pass your turn</li>
            <li>First player to 100 points wins the game</li>
          </ul>
        </div>
        }

      <div className='newGameDiv'>
        <button className='newGame' onClick={() => dispatch(startNewGame())}>{gameOn ? 'Stop Game' : 'New Game'}</button>
      </div>
    </div>
  )
}

export default Dice