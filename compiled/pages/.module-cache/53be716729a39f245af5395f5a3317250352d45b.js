var React = require("react");
var $ = require("jquery");

var RegisterPage = React.createClass({displayName: "RegisterPage",

    handleFailedSubmit: function(responseMessage) {
        this.setState({
            shouldShowErrorMessage: true,
            errorMessage: responseMessage
        });
    },

    handleSuccessfulSubmit: function(responseMessage, credentials) {
        this.setState({
            shouldShowErrorMessage: false
        });
        $.ajax({
            url: "http://localhost:8132/users/authenticate",
            dataType: "json",
            type: "POST",
            data: credentials,
            success: function(response) {
                if(response.status == "fail") {
                    console.log(response.data.message);
                }
                else {
                    localStorage.setItem("token", response.data.token);
                    window.location = "/#/dashboard";
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    },

    handleSubmit: function(e) {
        e.preventDefault();

        var email = this.refs.emailInput.value.trim();
        var password = this.refs.passwordInput.value.trim();

        var dataToSend = {
            email: email,
            password: password
        };
        $.ajax({
            url: "http://localhost:8132/users/register",
            dataType: "json",
            type: "POST",
            data: dataToSend,
            success: function(response) {
                if(response.status == "fail") {
                    this.handleFailedSubmit(response.data.message);
                }
                else {
                    this.handleSuccessfulSubmit(response.data.message, dataToSend);
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    },

    getInitialState: function() {
        return {
            shouldShowErrorMessage : false,
            errorMessage: null
        }
    },

    render: function() {

        return(
            React.createElement("div", {id: "registerPageContainer"}, 

                React.createElement("form", {id: "registerForm", className: "form-horizontal col-sm-6 col-sm-offset-3", onSubmit: this.handleSubmit}, 

                     this.state.shouldShowErrorMessage ?
                        React.createElement("div", {id: "errorMessageContainer", className: "col-sm-12 text-center"}, " ", React.createElement("p", {id: "errorMessage"}, " ", this.state.errorMessage, " "), " ")
                        : null, 
                    

                    React.createElement("div", {id: "registerFormHeader", className: "col-sm-12 text-center"}, 
                        React.createElement("h4", {id: "registerFormHeadline"}, "Register")
                    ), 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-2 control-label", htmlFor: "userEmail"}, "Email: "), 
                        React.createElement("div", {className: "col-sm-10"}, 
                            React.createElement("input", {className: "form-control", id: "userEmail", type: "email", placeholder: "email@email.com", ref: "emailInput"})
                        )
                    ), 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("label", {className: "col-sm-2 control-label", htmlFor: "userPassword"}, "Password: "), 
                        React.createElement("div", {className: "col-sm-10"}, 
                            React.createElement("input", {className: "form-control", id: "userPassword", type: "password", placeholder: "password", ref: "passwordInput"})
                        )
                    ), 

                    React.createElement("button", {className: "btn btn-success center-block"}, "Sign up")
                )

            )
        )
    }
});

module.exports = RegisterPage;