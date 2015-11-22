var express = require("express");
var app = express();
var httpResponses = require("constants/httpResponses");
var httpResponder = require("lib/httpResponder");
var endpoints = require("constants/endpoints");
var appRoot = require("appRoot");

app.use(express.static(appRoot + "/app/build"));

app.get("/", function(req, res) {
    res.sendFile(appRoot + "/app/build/index.html");
});


var mongoose = require("mongoose");
var dbUri = require("private/databaseSecrets").databaseUri;
mongoose.connect(dbUri);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//user Bootstrap Routes
var userEndpoint = exports.usersEndpoint = endpoints.usersEndpoint;
var userBootstrapRoutes = require("resources/users/routes");
app.use(userEndpoint, userBootstrapRoutes);

//Routes for testing
exports.testingEndpoint = endpoints.testingEndpoint;
exports.authMiddlewareTestingEndpoint = endpoints.authMiddlewareTestingEndpoint;
app.get(this.testingEndpoint, function(req, res) {
    return res.json(
        httpResponder.respondToOKRequest(httpResponses.successfulTestRouteGETResponseMessage)
    );
});
app.post(this.testingEndpoint, function(req, res) {
    return res.json(
        httpResponder.respondToCREATEDRequest(httpResponses.successfulTestRoutePOSTResponseMessage)
    );
});
app.put(this.testingEndpoint, function(req, res) {
    return res.json(
        httpResponder.respondToOKRequest(httpResponses.successfulTestRoutePUTResponseMessage)
    );
});
app.delete(this.testingEndpoint, function(req, res) {
    return res.json(
        httpResponder.respondToOKRequest(httpResponses.successfulTestRouteDELETEResponseMessage)
    );
});

/*TOKEN VERIFICATION MIDDLEWARE*/
var verifyTokenMiddleware = require("middleware/verifyToken");
app.use(endpoints.rootEndpoint, verifyTokenMiddleware);
/*Define all routes that need authentication after this line*/

/*AUTH needed test route*/
app.post(this.authMiddlewareTestingEndpoint, function(req,res) {
    return res.json(
        httpResponder.respondToOKRequest(httpResponses.successfulTestRouteAuthNeededResponseMessage)
    );
});


//404 catchall
app.use("/", function(req, res) {
    res.json({
        message: "Server 404 page"
    })
});


var serverStatics = require("constants/serverStatics");
exports.localBaseUrl = serverStatics.localBaseUrl;
exports.serverListeningMessage = serverStatics.serverListeningMessage;
exports.serverClosingMessage = serverStatics.serverClosingMessage;
exports.start = function(port, callback) {
    var message = this.serverListeningMessage + port;
    server = app.listen(port, callback);
    console.log(message);
    return message;
};
exports.stop = function(port, callback) {
    var message = this.serverClosingMessage + port;
    server.close(callback);
    console.log(message);
    return message;
};