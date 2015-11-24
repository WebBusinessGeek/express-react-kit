var fakeDom = require("testHelpers/fakeDom")("<body></body>");
var HelloPage = require("pages/hello");
var assert = require("chai").assert;
var React = require("react");
var TestUtils = require('react-addons-test-utils');


describe("HelloPage", function() {

    it("should be a composite component", function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<HelloPage/>);
        result = renderer.getRenderOutput();
        assert.deepEqual(result, {hello: "hello"});
    });
});