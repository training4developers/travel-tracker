var
	mongoose = require("mongoose"),

	trainingEngagementSchema = mongoose.Schema({
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

	TrainingEngagementModel = mongoose.model("trainEngagement", trainEngagementSchema);

module.exports = TrainingEngagementModel;
