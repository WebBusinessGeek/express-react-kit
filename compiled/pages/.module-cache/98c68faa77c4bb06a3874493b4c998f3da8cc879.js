var React = require("react");

NotFoundPage = React.createClass({displayName: "NotFoundPage",
    render: function() {
        return(
            React.createElement("div", {id: "NotFoundPageContainer", className: "text-center"}, 
                React.createElement("div", {id: "NotFoundPageHeader"}, 
                    React.createElement("h1", {id: "NotFoundPageHeadline"}, "Whoops! 404"), 
                    React.createElement("h3", {id: "NotFoundPageSubHeadline"}, "The page you are looking for doesn't exist.")
                ), 
                React.createElement("p", {id: "NotFoundPageBackHome"}, "Go back ", React.createElement("a", {href: "/#/"}, " home "), " ")
            )
        )
    }
});
module.exports = NotFoundPage;