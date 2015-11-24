var React = require("react");

var HelloPage = React.createClass({displayName: "HelloPage",
    render: function() {
        return (
            React.createElement("div", {id: "helloPageContainer", className: "text-center"}, 
                React.createElement("h1", {id: "helloPageWelcome"}, "Hello Earth!"), 
                React.createElement("a", {className: "btn btn-primary", href: "/#/login"}, "Log in"), 
                React.createElement("a", {className: "btn btn-success", href: "/#/register"}, "Register"), 
                React.createElement("a", {className: "btn btn-danger", href: "/#/bad"}, "404 page")
            )
        )
    }
});

module.exports = HelloPage;