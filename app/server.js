module.exports = function(config) {

	global.logger = require("./logger.js")(config.logger),

	var
		appWebServer = require("./app-web-server"),
		appSocketSocket = require("./app-socket-server"),
		httpServer = require("http").createServer(appWebServer(config.appWebServer)),

	appSocketServer(require('socket.io')(httpServer, config.appSocketServer));

	httpServer.listen(config.httpServer.port, function() {
		console.log("http server started on port " + config.httpServer.port);
	});

}
