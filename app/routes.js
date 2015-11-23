var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createBrowserHistory = require("history/lib/createBrowserHistory");
var requireAuth = require("middleware/requireAuth");
var requireUnauthentication = require("middleware/requireUnauthentication");

var helloPage = require("./pages/hello");
var notFoundPage = require("./pages/notFound");
var loginPage = require("./pages/login");
var registerPage = require("./pages/register");
var dashboardPage = require("./pages/dashboard");

var routes = (
    <Router history={createBrowserHistory()}>
        <Route name="hello" path="/" component={helloPage} />
        <Route name="login" path="/login" component={loginPage} onEnter={requireUnauthentication} />
        <Route name="login" path="/register" component={registerPage} onEnter={requireUnauthentication} />
        <Route name="dashboard" path="/dashboard" component={dashboardPage} onEnter={requireAuth} />
        <Route name="notFound" path="/*" component={notFoundPage} />
    </Router>
);

module.exports = routes;