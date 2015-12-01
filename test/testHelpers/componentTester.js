var TestUtils = require("react-addons-test-utils");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var assert = require("chai").assert;

exports.chai = chai;
var assertions = exports.assert = assert;
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
    TestUtils.renderIntoDocument(component);
};

exports.testAsyncMethodSpy = function(doneCallback, assertion, object, property1, property2) {
    function delay() {
        console.log("delayed response requested");
        setTimeout(assert, 2000);
    }

    function assert() {
        console.log("assertion called to ensure that " + property1 + " has been " + property2);
        setTimeout(laterAssert(property1, property2),2000);
    }

    function laterAssert(property1, property2) {
        console.log("preparing assertion...");
        console.log("now asserting that " + property1 + " has been " + property2);
        assertions[assertion](object[property1][property2]);
        console.log(property1 + " being restored...");
        object[property1].restore();
        console.log(property1 + " restored");
        console.log("assertion completed");
        doneCallback();
    }
    process.nextTick(delay);

};