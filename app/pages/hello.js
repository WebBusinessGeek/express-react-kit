var React = require("react");

var HelloPage = React.createClass({
    render: function() {
        return (
            <div id="helloPageContainer" className="text-center">
                <h1 id="helloPageWelcome">Hello Earth!</h1>
                <a className="btn btn-primary" href="/#/login">Log in</a>
                <a className="btn btn-success" href="/#/register">Register</a>
                <a className="btn btn-danger" href="/#/bad">404 page</a>
            </div>
        )
    }
});

module.exports = HelloPage;