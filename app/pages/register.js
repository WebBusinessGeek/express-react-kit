var React = require("react");
var $ = require("jquery");

var RegisterPage = React.createClass({

    attemptToRegister: function(dataToSend) {
        $.ajax({
            url: "http://localhost:8132/users/register",
            dataType: "json",
            type: "POST",
            data: dataToSend,
            success: function(response) {
                if(response.status == "success") {
                    this.handleSuccessfulSubmit(dataToSend);
                }
                else {
                    this.handleFailedSubmit(response.data.message);
                }
            }.bind(this),

            error: function(xhr, status, err) {
                return err;
            }
        });
    },

    handleFailedSubmit: function(failedResponseMessage) {
        this.setState({
            shouldShowErrorMessage: true,
            errorMessage: failedResponseMessage
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
    },

    getInitialState: function() {
        return {
            shouldShowErrorMessage : false,
            errorMessage: null
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