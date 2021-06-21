const produce = require("./modules/producer/produce")
const consume = require("./modules/consumer/consume")


switch (process.argv[2]) {
	case "p":
		// call the `produce` function and log an error if it occurs
		console.log("running producer")
		produce().catch(err => {
			console.error('error in producer: ', err)
		})
		break;
	case "c":
		// start the consumer, and log any errors
		console.log('running consumer')
		consume().catch(err => {
			console.error('error in consumer: ', err)
		})
		break;
	default:
		 console.log("invalid input")
}



