var React = require("react");
var $ = require("jquery");

var RegisterPage = React.createClass({

    attemptToRegister: function(dataToSend) {
        console.log("attemptToRegister firing");
        $.ajax({
            url: "http://localhost:8132/users/register",
            dataType: "json",
            type: "POST",
            data: dataToSend,
            success: function(response) {
                if(response.status == "success") {
                    console.log("attemptToRegister successful request");
                    this.setState({
                        shouldHandleSuccessfulSubmit: true,
                        shouldHandleFailedSubmit: false,
                        validCredentials: dataToSend,
                        failedReason: null
                    });
                }
                else {
                    console.log("attemptToRegister successful request but bad data");
                    this.setState({
                        shouldHandleSuccessfulSubmit: false,
                        shouldHandleFailedSubmit: true,
                        failedReason: response.data.message,
                        validCredentials: null
                    });
                }
            },
            error: function(xhr, status, err) {
                console.log("attemptToRegister error sending request");
                return err;
            }
        });
    },

    handleFailedSubmit: function() {
        this.setState({
            shouldShowErrorMessage: true,
            errorMessage: this.state.failedReason
        });
    },

    handleSuccessfulSubmit: function(credentials) {
        this.setState({
            shouldShowErrorMessage : false,
            errorMessage: null
        });

        $.ajax({
            url: "http://localhost:8132/users/authenticate",
            dataType: "json",
            type: "POST",
            data: credentials,
            success: function(response) {
                if(response.status == "fail") {

                }
                else {
                    localStorage.setItem("token", response.data.token);
                    window.location = "/#/dashboard";
                }
            }.bind(this),
            error: function(xhr, status, err) {
                return err;
            }
        });
    },

    handleSubmit: function(e) {
        if(e) {
            e.preventDefault();
        }
        var dataToSend = {
            email: this.refs.emailInput.value.trim(),
            password: this.refs.passwordInput.value.trim()
        };
        this.attemptToRegister(dataToSend);

        /*if(attempt = "fail") {
            return this.handleFailedSubmit("fake");
        }
        else {
            return this.handleSuccessfulSubmit("fake");
        }*/



        /*$.ajax({
            url: "http://localhost:8132/users/register",
            dataType: "json",
            type: "POST",
            data: dataToSend,
            success: function(response) {
                if(response.status == "fail") {
                    return this.handleFailedSubmit(response.data.message);
                }
                else {
                    return this.handleSuccessfulSubmit(response.data.message, dataToSend);
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });*/

    },

    getInitialState: function() {
        return {
            shouldShowErrorMessage : false,
            errorMessage: null,
            shouldHandleSuccessfulSubmit: false,
            shouldHandleFailedSubmit: false,
            failedReason: null,
            validCredentials: null
        }
    },

    render: function() {

        return(
            <div id="registerPageContainer">

                <form id="registerForm" className="form-horizontal col-sm-6 col-sm-offset-3" ref="registerForm" onSubmit={this.handleSubmit}>

                    { this.state.shouldShowErrorMessage ?
                        <div id="errorMessageContainer" className="col-sm-12 text-center"> <p id="errorMessage"> {this.state.errorMessage} </p> </div>
                        : null
                    }

                    <div id="registerFormHeader" className="col-sm-12 text-center">
                        <h4 id="registerFormHeadline">Register</h4>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userEmail">Email: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userEmail" type="email" placeholder="email@email.com" ref="emailInput" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userPassword">Password: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userPassword" type="password" placeholder="password" ref="passwordInput" />
                        </div>
                    </div>

                    <button className="btn btn-success center-block">Sign up</button>
                </form>

            </div>
        )
    }
});

module.exports = RegisterPage;