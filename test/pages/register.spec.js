var fakeDom = require("testHelpers/fakeDom")();
var ComponentTester = require("testHelpers/componentTester");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var RegisterPage = require("pages/register");
var RouteTester = require("testHelpers/routeTester");
var sinon = require("sinon");


describe("RegisterPage", function() {

    describe("RegisterPage Structure", function() {
        before(function(){
            this.component = ComponentTester.renderAndGetOutput(<RegisterPage/>);
            this.componentForm = this.component.props.children;
            this.componentFormEmailInput = this.componentForm.props.children[2].props.children[1].props.children;
            this.componentFormPasswordInput = this.componentForm.props.children[3].props.children[1].props.children;
        });

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
        before(function() {
            this.realComponent = TestUtils.renderIntoDocument(<RegisterPage/>);
            this.realEmailInput = this.realComponent.refs.emailInput;
            this.realPasswordInput = this.realComponent.refs.passwordInput;
            this.realForm = this.realComponent.refs.registerForm;
            this.getCurrentState = function() {return this.realComponent.state};

            this.spyAttemptToRegister = sinon.spy(this.realComponent, "attemptToRegister");
            this.spyHandleFailedSubmit = sinon.spy(this.realComponent, "handleFailedSubmit");
            this.spyHandleSuccessfulSubmit = sinon.spy(this.realComponent, "handleSuccessfulSubmit");
        });

        it("should allow values of email and password inputs to change", function() {
            ComponentTester.assert.equal(this.realEmailInput.value, "");
            ComponentTester.assert.equal(this.realPasswordInput.value, "");

            var newEmailInputValue = "emailTest@emailTest.com";
            var newPasswordInputValue = "password";

            this.realEmailInput.value = newEmailInputValue;
            this.realPasswordInput.value = newPasswordInputValue;

            ComponentTester.assert.equal(this.realEmailInput.value, newEmailInputValue);
            ComponentTester.assert.equal(this.realPasswordInput.value, newPasswordInputValue);
        });
        it("should have the correct initial state", function() {

            var expectedState = {
                shouldShowErrorMessage : false,
                errorMessage: null,
                shouldHandleSuccessfulSubmit: false,
                shouldHandleFailedSubmit: false,
                failedReason: null,
                validCredentials: null
            };
            ComponentTester.assert.deepEqual(expectedState, this.getCurrentState());

        });
        describe("Register Submission Server needed functionality", function() {
            before(function(done) {
                RouteTester.testingPort = 8132;
                RouteTester.startServer(done);
            });
            after(function() {
                RouteTester.stopServer();
                RouteTester.forceNewPort();
            });
            it("should call attemptToRegister method on form submission", function(done) {
                this.realEmailInput.value = "someEmail@email.com";
                this.realPasswordInput.value = "password";

                var component = this;

                var callback = function() {
                    return ComponentTester.testAsyncMethodSpy(done, "isTrue", component, "spyAttemptToRegister", "calledOnce");
                };

                console.log("simulating submit...");
                ComponentTester.TestUtils.Simulate.submit(this.realForm, callback());
                console.log("submit simulated");
                /*ComponentTester.assert.isTrue(this.spyAttemptToRegister.calledOnce);
                done();*/
            });
            it("state should be changed to negative context on bad email", function(done) {
                this.realEmailInput.value = "bad";
                this.realPasswordInput.value = "password";

                var component = this;

                /*var callback = function() {
                    return ComponentTester.testAsyncMethodSpy(done, "isTrue", component, "spyHandleFailedSubmit", "calledOnce");
                };*/

                console.log("simulating submit...");
                ComponentTester.TestUtils.Simulate.submit(this.realForm, ComponentTester.testAsyncMethodSpy(done, "isTrue", component, "spyHandleFailedSubmit", "calledOnce"));
                console.log("submit simulated");


                /*
                function assert() {
                    setTimeout(laterAssert,2000);
                }
                function laterAssert() {
                    console.log("starting assertion...");
                    ComponentTester.assert.isTrue(component.spyHandleFailedSubmit.calledOnce);
                    component.spyHandleFailedSubmit.restore();
                    console.log("assertion completed");
                    done();
                }

                function sayHello() {
                    console.log("hello")
                }
                process.nextTick(sayHello);

                console.log("simulating submit...");
                ComponentTester.TestUtils.Simulate.submit(this.realForm, assert());
                console.log("submit simulated");
                */



            })
        })


    });
});
