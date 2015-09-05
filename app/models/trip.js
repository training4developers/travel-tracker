var
	mongoose = require("mongoose"),

	tripSchema = mongoose.Schema({
		originCity: String
		originAirportCode: String
		destinationCity: String,
		destinationAirportCode: String,
		travelStartDate: Date,
		travelEndDate: Date,
		client: {
			name: String,
			code: String
		}
		perdiem: {
			fullDay: Number,
			firstLastDay: Number
		},
		classStartDate: Date,
		classEndDate: Date,
		totalPayment: Number,
		contractType: String
	}),

	TripModel = mongoose.model("trip", tripSchema);

module.exports = TripModel;
