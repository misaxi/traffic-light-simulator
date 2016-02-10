const test = require('tape')
const Timer = require('../timer')
const TrafficLight = require('../traffic-light')

test('traffic light should be green', t => {
	t.plan(1)
	const timer = new Timer('green')
	const light = new TrafficLight(timer)
	t.equal('green', light.current())
})

test('traffic light should be yellow after 5 minutes', t => {
	t.plan(1)
	const timer = new Timer('green')
	const light = new TrafficLight(timer)
	for (var i = 0; i <= 5 * 60; i++) light.tick()
	t.equal('yellow', light.current())
})
