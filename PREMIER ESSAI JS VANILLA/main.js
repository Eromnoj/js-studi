const startGame = document.querySelector('.start-game')

const player1Name = document.querySelector('.player1--name')
const player2Name = document.querySelector('.player2--name')

const player1Pending = document.querySelector('.player1--pending')
const player2Pending = document.querySelector('.player2--pending')

const player1score = document.querySelector('.player1--score')
const player2score = document.querySelector('.player2--score')

const roll = document.querySelector('.roll')
const hold = document.querySelector('.hold')

const dice = document.querySelector('.dice')
const diceValue = document.querySelector('.dice--value')
const currentPlayerName = document.querySelector('.currentPlayer--name')
const endGameDiv = document.querySelector('.endGameDiv')
const endGame = document.querySelector('.endGame')
const newGame =document.querySelector('.newGame')
const game = document.querySelector('.game')

game.style.display = 'none'
endGameDiv.style.display = 'none'

let partie
let player1
let player2

const mainDisplay = () => {
	currentPlayerName.innerText = player1.turn ? player1.name : player2.name
	player1Name.innerText = player1.name
	player2Name.innerText = player2.name
	player1score.innerText = player1.total
	player2score.innerText = player2.total
	player1Pending.innerText = player1.current
	player2Pending.innerText = player2.current
	diceValue.innerText = partie.dice

	if(partie.winner !== ''){
		endGame.innerHTML = `<p>${partie.winner} gagne la partie</p>`
		endGameDiv.style.display = 'block'
		dice.style.display = 'none'
	}
}

startGame.addEventListener('submit', (e) => {
	e.preventDefault()
	player1 = new Player(document.querySelector('.input--player1').value)
	player2 = new Player(document.querySelector('.input--player2').value)

	partie = new Game(player1, player2)
	partie.startGame()
	
	mainDisplay()
	game.style.display = 'block'
	startGame.style.display ='none'
})



roll.addEventListener('click', () => {
	partie.round()
	mainDisplay()
})

hold.addEventListener('click', () => {
	partie.endRound()
	mainDisplay()
})

newGame.addEventListener('click', () => {
	partie.winner = ''
	startGame.style.display ='flex'
	endGameDiv.style.display = 'none'
	dice.style.display = 'block'
	game.style.display = 'none'
})