var fakeDom = require("testHelpers/fakeDom")();
var ComponentTester = require("testHelpers/componentTester");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var assert = require("chai").assert;
var RegisterPage = require("pages/register");

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
        });
        describe("Register Form Bad Submission", function() {
            it("should show error message on bad submission", function() {
                ComponentTester.assert.deepEqual(this.realComponent.state, {shouldShowErrorMessage: false, errorMessage: null});
                //ComponentTester.assert.deepEqual(this.realComponent.handleSubmit(), {a: "a"});

            })
        })

    });
});

/*
{ getDOMNode:
 { [Function: bound ]
 __reactBoundContext: [Circular],
 __reactBoundMethod: [Function],
 __reactBoundArguments: null,
 bind: [Function] },
 handleFailedSubmit:
 { [Function: bound ]
 __reactBoundContext: [Circular],
 __reactBoundMethod: [Function],
 __reactBoundArguments: null,
 bind: [Function] },
 handleSuccessfulSubmit:
 { [Function: bound ]
 __reactBoundContext: [Circular],
 __reactBoundMethod: [Function],
 __reactBoundArguments: null,
 bind: [Function] },
 handleSubmit:
 { [Function: bound ]
 __reactBoundContext: [Circular],
 __reactBoundMethod: [Function],
 __reactBoundArguments: null,
 bind: [Function] },
 props: {},
 context: {},
 refs:
 { emailInput:
 Element {
 _childNodesList: null,
 _ownerDocument: [Object],
 _childrenList: null,
 _version: 5,
 _memoizedQueries: {},
 _readonly: false,
 _namespaceURI: 'http://www.w3.org/1999/xhtml',
 _prefix: null,
 _localName: 'input',
 _attributes: [Object],
 _settingCssText: false,
 _style: [Object],
 _classList: [Object],
 _reactInternalComponent: [Object],
 getDOMNode: [Function: legacyGetDOMNode],
 isMounted: [Function: legacyIsMounted],
 setState: [Function: legacySetStateEtc],
 replaceState: [Function: legacySetStateEtc],
 forceUpdate: [Function: legacySetStateEtc],
 setProps: [Function: legacySetProps],
 replaceProps: [Function: legacyReplaceProps] },
 passwordInput:
 Element {
 _childNodesList: null,
 _ownerDocument: [Object],
 _childrenList: null,
 _version: 5,
 _memoizedQueries: {},
 _readonly: false,
 _namespaceURI: 'http://www.w3.org/1999/xhtml',
 _prefix: null,
 _localName: 'input',
 _attributes: [Object],
 _settingCssText: false,
 _style: [Object],
 _classList: [Object],
 _reactInternalComponent: [Object],
 getDOMNode: [Function: legacyGetDOMNode],
 isMounted: [Function: legacyIsMounted],
 setState: [Function: legacySetStateEtc],
 replaceState: [Function: legacySetStateEtc],
 forceUpdate: [Function: legacySetStateEtc],
 setProps: [Function: legacySetProps],
 replaceProps: [Function: legacyReplaceProps] } },
 updater:
 { isMounted: [Function],
 enqueueCallback: [Function],
 enqueueCallbackInternal: [Function],
 enqueueForceUpdate: [Function],
 enqueueReplaceState: [Function],
 enqueueSetState: [Function],
 enqueueSetProps: [Function],
 enqueueSetPropsInternal: [Function],
 enqueueReplaceProps: [Function],
 enqueueReplacePropsInternal: [Function],
 enqueueElementInternal: [Function] },
 state: { shouldShowErrorMessage: false, errorMessage: null },
 _reactInternalInstance:
 { _currentElement:
 { '$$typeof': Symbol(react.element),
 type: [Object],
 key: null,
 ref: null,
 props: {},
 _owner: null,
 _store: {} },
 _rootNodeID: '.1',
 _instance: [Circular],
 _pendingElement: null,
 _pendingStateQueue: null,
 _pendingReplaceState: false,
 _pendingForceUpdate: false,
 _renderedComponent:
 ReactDOMComponent {
 _tag: 'div',
 _renderedChildren: [Object],
 _previousStyle: null,
 _previousStyleCopy: null,
 _rootNodeID: '.1',
 _wrapperState: null,
 _topLevelWrapper: null,
 _nodeWithLegacyProperties: null,
 _unprocessedContextDev: [Object],
 _processedContextDev: [Object],
 _currentElement: [Object],
 _mountIndex: 0,
 _mountImage: null,
 _isOwnerNecessary: false,
 _warnedAboutRefsInRender: false },
 _context: { '__validateDOMNesting_ancestorInfo$q4pctgiml6m9529': [Object] },
 _mountOrder: 3,
 _topLevelWrapper:
 { _currentElement: [Object],
 _rootNodeID: '.1',
 _instance: [Object],
 _pendingElement: null,
 _pendingStateQueue: null,
 _pendingReplaceState: false,
 _pendingForceUpdate: false,
 _renderedComponent: [Circular],
 _context: [Object],
 _mountOrder: 2,
 _topLevelWrapper: null,
 _pendingCallbacks: null,
 _mountIndex: 0,
 _mountImage: null,
 _isOwnerNecessary: false,
 _warnedAboutRefsInRender: false },
 _pendingCallbacks: null,
 _mountIndex: 0,
 _mountImage: null,
 _isOwnerNecessary: false,
 _warnedAboutRefsInRender: false } }*/