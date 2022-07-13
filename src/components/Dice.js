import React, { useRef } from 'react'
import { FaDiceD6, FaRegStopCircle, FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa"
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
    gsap.to(diceRef.current, { rotation: "+=720", duration: 1}) 
    setTimeout(()=> {
      dispatch(rollDice())
    }, 700)
  }

  return (
    <div className='buttonDiv'>
      {gameOn &&
        <div className='dice'>
          <div className='diceFace' ref={diceRef}>
            {/* {value} */}
            {diceFace}
          </div>
          <div className='rollHoldDiv'>
            <button className='roll' onClick={() => rotateDice()}><FaDiceD6 />Roll</button>
            <button className='hold' onClick={() => dispatch(holdDice())}><FaRegStopCircle />Hold</button>
          </div>
        </div>}

      <div className='newGameDiv'>
        <button className='newGame' onClick={() => dispatch(startNewGame())}>{gameOn ? 'Stop Game' : 'New Game'}</button>
      </div>
    </div>
  )
}

export default Dice