var React = require("react");

LoginPage = React.createClass({displayName: "LoginPage",

    render: function() {
        return (
            React.createElement("div", {id: "loginPageContainer"}, 

                React.createElement("form", {id: "loginForm", className: "form-horizontal col-sm-6 col-sm-offset-3"}, 

                    React.createElement("div", {id: "loginFormHeader", className: "col-sm-12 text-center"}, 
                        React.createElement("h4", {id: "loginFormHeadline"}, "Log in")
                    ), 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-2 control-label", htmlFor: "userEmail"}, "Email: "), 
                        React.createElement("div", {className: "col-sm-10"}, 
                            React.createElement("input", {className: "form-control", id: "userEmail", type: "email", placeholder: "email@email.com"})
                        )
                    ), 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-2 control-label", htmlFor: "userPassword"}, "Password: "), 
                        React.createElement("div", {className: "col-sm-10"}, 
                            React.createElement("input", {className: "form-control", id: "userPassword", type: "password", placeholder: "password"})
                        )
                    ), 

                    React.createElement("button", {className: "btn btn-success center-block"}, "Log in")
                )

            )
        )
    }
});

module.exports = LoginPage;