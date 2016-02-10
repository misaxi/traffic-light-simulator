const assert = require('assert')

module.exports = TrafficLight

function TrafficLight (timer) {
	assert.equal(typeof timer, 'object')
	this.timer = timer
	this.state = timer.current()
	this.remaining = this.state.time
}

TrafficLight.prototype.tick = function () {
	if (this.remaining === 0) {
		this.state = this.timer.next()
		this.remaining = this.state.time
	}
	this.remaining--
}

TrafficLight.prototype.current = function () {
	return this.state.light
}
