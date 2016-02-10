const test = require('tape')
const Timer = require('../timer')

test('green is followed by yellow', t => {
	t.plan(2)
	const timer = new Timer('green')
	const next = timer.next()
	t.equal('yellow', next.light)
	t.equal(30, next.time)
})

test('yellow is followed by red', t => {
	t.plan(2)
	const timer = new Timer('yellow')
	const next = timer.next()
	t.equal('red', next.light)
	t.equal(5 * 60 + 30, next.time)
})

test('red is followed by green', t => {
	t.plan(2)
	const timer = new Timer('red')
	const next = timer.next()
	t.equal('green', next.light)
	t.equal(5 * 60, next.time)
})

test('current should return the current state', t => {
	t.plan(1)
	const timer = new Timer('green')
	const next = timer.current()
	t.equal('green', next.light)
})
