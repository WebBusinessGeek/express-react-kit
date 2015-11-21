var React = require("react");

NotFoundPage = React.createClass({
    render: function() {
        return(
            <div id="NotFoundPageContainer" className="text-center">
                <div id="NotFoundPageHeader">
                    <h1 id="NotFoundPageHeadline">Whoops! 404</h1>
                    <h3 id="NotFoundPageSubHeadline">The page you are looking for doesn't exist.</h3>
                </div>
                <p id="NotFoundPageBackHome">Go back <a href="/#/"> home </a> </p>
            </div>
        )
    }
});
module.exports = NotFoundPage;