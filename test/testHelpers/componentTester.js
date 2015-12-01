var TestUtils = require("react-addons-test-utils");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var assert = require("chai").assert;

exports.chai = chai;
exports.assert = assert;
exports.TestUtils = TestUtils;

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