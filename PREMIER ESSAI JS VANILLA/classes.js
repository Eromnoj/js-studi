class Player {
	constructor(name, current = 0, total = 0, turn = false) {
		this.name = name
		this.current = current
		this.total = total
		this.turn = turn
	}

	throwDice() {
		if (this.turn === true) {
			let roll = Math.ceil(Math.random() * 6)
			console.log(`${this.name} roll ${roll}`)
			if (roll > 1) {
				this.current = this.current + roll
			} else {
				this.current = 0
			}
			console.log(`${this.name} current ${this.current}`)
			return roll
		}
	}

	hold() {
		this.total = this.total + this.current
		this.current = 0
	}
}

class Game {
	constructor(player1, player2, gameOn = false, dice = 1, winner = '') {
		this.player1 = player1
		this.player2 = player2
		this.gameOn = gameOn
		this.dice = dice
		this.winner = winner
	}

	startGame() {
		this.gameOn = true
		Math.ceil(Math.random() * 6) % 2 === 0 ? this.player1.turn = true : this.player2.turn = true
		return this.player1.turn ? this.player1.name : this.player2.name
	}

	round() {
		let currentPlayer = this.player1.turn ? this.player1 : this.player2
		console.log(currentPlayer.name)
		this.dice = currentPlayer.throwDice()
		if (this.dice === 1) {

			this.switchTurn()
		}

	}

	endRound() {
		let currentPlayer = this.player1.turn ? this.player1 : this.player2
		currentPlayer.hold()
		if (currentPlayer.total >= 100) {
			this.endGame(currentPlayer.name)
			return 
		}
		this.switchTurn()
	}

	switchTurn() {
		this.player1.turn = !this.player1.turn
		this.player2.turn = !this.player2.turn
	}

	endGame(player) {
		this.gameOn = false
		this.winner = player
		console.log(`${player} a gagné !!`)
	}
}