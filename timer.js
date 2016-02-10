const assert = require('assert')

const SECONDS = 1
module.exports = Timer 

/*
traffic lights pattern

   5min 30sec  5min 30sec
N     g     y     r     r
S     g     y     r     r
E     r     r     g     y
W     r     r     g     y

based on the pattern:
	green => 5 min
	yellow => 30 sec
	red => 5 min 30 sec
**/
const states = [
	{ light: 'green', time: 5 * 60 * SECONDS },
	{ light: 'yellow', time: 30 * SECONDS },
	{ light: 'red', time: (5 * 60 + 30) * SECONDS }
]

function Timer (initLight) {
	assert.ok(states.some(s => s.light === initLight), 'initLight not valid')
	var position
	states.forEach((s, index) => {
		if (s.light !== initLight) return
		position = index
	})
	Object.assign(this, {states, position})
}

Timer.prototype.current = function () {
	return this.states[this.position]
}

Timer.prototype.next = function () {
	this.position = (this.position + 1) % this.states.length
	return this.states[this.position]
}
