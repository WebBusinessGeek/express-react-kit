var ComponentTester = require("testHelpers/componentTester");
var React = require("react");
var TestUtils = require("react-addons-test-utils");
var assert = require("chai").assert;
var RegisterPage = require("pages/register");



describe("RegisterPage", function() {
    before(function(){
        this.component = ComponentTester.renderAndGetOutput(<RegisterPage/>);
        this.componentForm = this.component.props.children;
        this.componentFormEmailInput = this.componentForm.props.children[2].props.children[1].props.children;
        this.componentFormPasswordInput = this.componentForm.props.children[3].props.children[1].props.children;
    });

    describe("RegisterPage Structure", function() {
        it("should have correct id", function() {
            ComponentTester.assert.equal(this.component.props.id, "registerPageContainer");
        });
        it("should be a div", function() {
            ComponentTester.assert.equal(this.component.type, "div");
        });
        it("should have a form as a child", function() {
            ComponentTester.assert.include(this.componentForm, {type : "form"} );
            ComponentTester.assert.include(this.componentForm.props, {id: "registerForm"});
        });
        it("should have an email input with correct ref and type", function() {
            ComponentTester.assert.equal(this.componentFormEmailInput.type, "input");
            ComponentTester.assert.equal(this.componentFormEmailInput.ref, "emailInput");
            ComponentTester.assert.include(this.componentFormEmailInput.props, {type: "email"});
        });
        it("should have a password input with correct ref and type", function() {
            ComponentTester.assert.equal(this.componentFormPasswordInput.type, "input");
            ComponentTester.assert.equal(this.componentFormPasswordInput.ref, "passwordInput");
            ComponentTester.assert.include(this.componentFormPasswordInput.props, {type: "password"});
        })
    });

    describe("RegisterPage Form Submission functionality", function() {
        it("handleSubmit function gets called onSubmit", function() {

            windows = window.open;


            this.componentForm.props.onSubmit.__reactBoundContext.handleSubmit = function() {
                return "called";
            };

            var result = this.componentForm.props.onSubmit();
            ComponentTester.assert.deepEqual(result, {a: "a"});
        })
    });
});