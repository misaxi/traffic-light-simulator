const Timer = require('./timer')
const TrafficLight = require('./traffic-light')
const MINUTES = 1
const SECONDS = 1
const SIMULATION_PERIOD = 30 * MINUTES

main()

function main () {
	const result = [
		['N'],
		['S'],
		['E'],
		['W']
	]
	simulate(result)
	print(result)
}

function simulate (result) {
	const N = new TrafficLight(new Timer('green'))
	const S = new TrafficLight(new Timer('green'))
	const E = new TrafficLight(new Timer('red'))
	const W = new TrafficLight(new Timer('red'))

	for (var i = 0; i <= SIMULATION_PERIOD * 60 * SECONDS; i++) {
		N.tick()
		S.tick()
		E.tick()
		W.tick()

		if (i % 30 === 0) {
			sample(result, N, S, E, W)
		}
	}
}


function sample (result, N, S, E, W) {
	result[0].push(N.current())
	result[1].push(S.current())
	result[2].push(E.current())
	result[3].push(W.current())
}

function print (result) {
	console.log('sample taken every 30 seconds')
	console.log(result
		.map(line => line
			.map(w => w[0])	// take 1st char for display
			.join(' '))
		.join('\n')
	)
}