var ComponentTester = require("testHelpers/componentTester");
var React = require("react");
var TestUtils = require("react-addons-test-utils");
var assert = require("chai").assert;
var RegisterPage = require("pages/register");


describe("RegisterPage", function() {
    before(function(){
        this.component = ComponentTester.renderAndGetOutput(<RegisterPage/>);
    });

    describe("RegisterPage Structure", function() {
        it("should have correct id", function() {
            ComponentTester.assert.equal(this.component.props.id, "registerPageContainer");
        });
        it("should be a div", function() {
            ComponentTester.assert.equal(this.component.type, "div");
        });
    });

    describe("RegisterPage Form Submission", function() {
        it("should have a form as a child", function() {
            ComponentTester.assert.include(this.component.props.children, {type : "form"} );
            ComponentTester.assert.include(this.component.props.children.props, {id: "registerForm"});
        });
        it("should have a onSubmit method on the form", function() {
            ComponentTester.assert.include(this.component.props.children.props.onSubmit);
        });


    });
});