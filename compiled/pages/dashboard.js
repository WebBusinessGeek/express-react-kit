var React = require("react");

var DashboardPage = React.createClass({displayName: "DashboardPage",
    render: function() {
        return(
            React.createElement("div", {id: "dashboardPageContainer"}, 
                React.createElement("p", {id: "dashboardPageTitle"}, "This is the dashboard")
            )
        )
    }
});

module.exports = DashboardPage;