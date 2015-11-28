var TestUtils = require("react-addons-test-utils");
var assert = require("chai").assert;


exports.assert = assert;

exports.renderAndGetOutput = function(component, refs) {
    var renderer = this.returnRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
};

exports.returnRenderer = function() {
    return TestUtils.createRenderer();
};

exports.renderIntoDocument = function(component) {
    TestUtils.renderIntoDocument(compnent);
};