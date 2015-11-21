var React = require("react");

LoginPage = React.createClass({

    render: function() {
        return (
            <div id="loginPageContainer">

                <form id="loginForm" className="form-horizontal col-sm-6 col-sm-offset-3">

                    <div id="loginFormHeader" className="col-sm-12 text-center">
                        <h4 id="loginFormHeadline">Log in</h4>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userEmail">Email: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userEmail" type="email" placeholder="email@email.com" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="userPassword">Password: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="userPassword" type="password" placeholder="password" />
                        </div>
                    </div>

                    <button className="btn btn-success center-block">Log in</button>
                </form>

            </div>
        )
    }
});

module.exports = LoginPage;