module.exports = function(config) {

	var
		mongoose = require("mongoose"),
		express = require("express"),
		multer = require("multer"),
		bodyParser = require("body-parser"),
		passport = require("passport"),
		cookieParser = require("cookie-parser"),
		expressSession = require("express-session"),
		crypto = require("crypto");

	var
		app = express(),

		cssFolder = path.join(config.webFolder, "css"),
		jsFolder = path.join(config.webFolder, "js"),
		libsFolder = path.join(config.webFolder, "libs"),
		mediaFolder = path.join(config.webFolder, "media"),
		imagesFolder = path.join(config.webFolder, "images"),
		uploadsFolder = path.join("app", "uploads"),
		defaultFile = path.join(config.webFolder, config.webFolder.defaultFile);

	mongoose.connect("mongodb://" +
		config.mongoServer.host + ":" +
		config.mongoServer.port + "/" +
		config.mongoServer.dbName);

	// serialize account id to session
	passport.serializeUser(function(account, done) {
		logger.info("serialize user account id: " + account._id);
  	done(null, account._id);
	});

	// deserialize account from the database using id from session
	passport.deserializeUser(function(accountId, done) {
		logger.info("deserialize user account id: " + accountId);
		require("./models/account")
			.findById(accountId, function(err, account) {

				if (err) {
					logger.error(util.inspect(err,0));
					res.status(500).json(err).end();
				}

				logger.info(util.inspect(account,0));

				done(null, account.toObject());
			});
	});

	// handle cookies
	app.use(cookieParser());

	// sessions are used for password ONLY
	app.use(session({
		resave: false,
		saveUninitialized: false,
		secret : "asecret"
	}));

	// setup passport for session based logins
	app.use(passport.initialize());
	app.use(passport.session());



	app.use("/", function(req, res) {

		res.sendFile(defaultFile, function() {
			if (err) res.status(err.status).end();
		});

	});

}
