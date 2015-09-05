var
	mongoose = require("mongoose"),

	expenseSchema = mongoose.Schema({
		purchaseDate: Date,
		vendor: {
			name: String
		},
		category: {
			name: String,
			isPerDiem: Boolean
		},
		amount: Number,
		receiptFileName: String
	}),

	ExpenseModel = mongoose.model("expense", expenseSchema);

module.exports = ExpenseModel;
