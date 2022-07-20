import React, { useRef, useState } from 'react'
import { FaUndo, FaRegStopCircle, FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { rollDice, holdDice, startNewGame } from '../redux/redux'
import { gsap } from 'gsap' 

function Dice() {
  const diceRef = useRef() //ref to apply gsap library animation on Dice element
  const [roll, setRoll] = useState(true) //State to avoid consecutive roll before end of dice animation cf rotateDice()
  //import datas from game Slice
  const gameOn = useSelector(state => state.game.gameOn)
  const value = useSelector(state => state.game.dice)
  const dispatch = useDispatch()

  //Switching between dice's face icons depending on the dice result
  let diceFace
  let ariaDiceValue = `Valeur du dé : ${value}` //string for accessibility
  switch (value) {
    case 1:
      diceFace = <FaDiceOne className='diceFaceIcon' />
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

  // function to apply dicec rotation and usind rollDice() reducer to change the dice value
  const rotateDice = () => {
    if (roll){
    setRoll(false) //block the dice roll before end of animation
    gsap.to(diceRef.current, { rotation: "+=1080", duration: 1 })
    setTimeout(() => {
      dispatch(rollDice())
    }, 700)
    setTimeout(() => setRoll(true), 1050)//animation ended allow the dice roll

    }
  }

  return (
    <div className='buttonDiv'>
      {/* Conditionnal render of dice or welcome display wether the game is running or not */}
      {gameOn ?
        <div className='dice'>
          <div className='diceFace' aria-label={ariaDiceValue} ref={diceRef}>
            {diceFace}
          </div>
          <div className='rollHoldDiv'>
            <button id='roll' className='roll' aria-label='lancer le dé' onClick={() => rotateDice()}><FaUndo />  Lancer</button>
            <button id='hold' className='hold' aria-label='bloquer le score cumulé' onClick={() => dispatch(holdDice())}><FaRegStopCircle />  Bloquer</button>
          </div>
        </div> :
        <div className='rules'>
          <ul>
            <li>Lancez le dé pour marquer des points</li>
            <li>Bloquez pour conserver vos points et passer votre tour</li>
            <li>Si vous faites un 1, vous perdez tout votre cumul en cours et passez votre tour</li>
            <li>Le premier joueur à 100 points gagne la partie</li>
          </ul>
        </div>
      }

      <div className='newGameDiv'>
        <button id='startStop' className='newGame' onClick={() => dispatch(startNewGame())}>{gameOn ? 'Arrêter la partie' : 'Nouvelle Partie'}</button>
      </div>
    </div>
  )
}

export default Dice