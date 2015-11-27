var React = require("react");
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




/*"$$typeof": "Symbol(react.element)"
  "_owner": [null]
  "_store": {}
  "key": [null]
  "props": {
    "children": {
      "$$typeof": "Symbol(react.element)"
      "_owner": [null]
      "_store": {}
      "key": [null]
      "props": {
        "children": [
          [null]
          {
            "$$typeof": "Symbol(react.element)"
            "_owner": [null]
            "_store": {}
            "key": [null]
            "props": {
              "children": {
                "$$typeof": "Symbol(react.element)"
                "_owner": [null]
                "_store": {}
                "key": [null]
                "props": {
                  "children": "Register"
                  "id": "registerFormHeadline"
                }
                "ref": [null]
                "type": "h4"
              }
              "className": "col-sm-12 text-center"
              "id": "registerFormHeader"
            }
            "ref": [null]
            "type": "div"
          }
          {
            "$$typeof": "Symbol(react.element)"
            "_owner": [null]
            "_store": {}
            "key": [null]
            "props": {
              "children": [
                {
                  "$$typeof": "Symbol(react.element)"
                  "_owner": [null]
                  "_store": {}
                  "key": [null]
                  "props": {
                    "children": "Email: "
                    "className": "col-sm-2 control-label"
                    "htmlFor": "userEmail"
                  }
                  "ref": [null]
                  "type": "label"
                }
                {
                  "$$typeof": "Symbol(react.element)"
                  "_owner": [null]
                  "_store": {}
                  "key": [null]
                  "props": {
                    "children": {
                      "$$typeof": "Symbol(react.element)"
                      "_owner": [null]
                      "_store": {}
                      "key": [null]
                      "props": {
                        "className": "form-control"
                        "id": "userEmail"
                        "placeholder": "email@email.com"
                        "type": "email"
                      }
                      "ref": "emailInput"
                      "type": "input"
                    }
                    "className": "col-sm-10"
                  }
                  "ref": [null]
                  "type": "div"
                }
              ]
              "className": "form-group"
            }
            "ref": [null]
            "type": "div"
          }
          {
            "$$typeof": "Symbol(react.element)"
            "_owner": [null]
            "_store": {}
            "key": [null]
            "props": {
              "children": [
                {
                  "$$typeof": "Symbol(react.element)"
                  "_owner": [null]
                  "_store": {}
                  "key": [null]
                  "props": {
                    "children": "Password: "
                    "className": "col-sm-2 control-label"
                    "htmlFor": "userPassword"
                  }
                  "ref": [null]
                  "type": "label"
                }
                {
                  "$$typeof": "Symbol(react.element)"
                  "_owner": [null]
                  "_store": {}
                  "key": [null]
                  "props": {
                    "children": {
                      "$$typeof": "Symbol(react.element)"
                      "_owner": [null]
                      "_store": {}
                      "key": [null]
                      "props": {
                        "className": "form-control"
                        "id": "userPassword"
                        "placeholder": "password"
                        "type": "password"
                      }
                      "ref": "passwordInput"
                      "type": "input"
                    }
                    "className": "col-sm-10"
                  }
                  "ref": [null]
                  "type": "div"
                }
              ]
              "className": "form-group"
            }
            "ref": [null]
            "type": "div"
          }
          {
            "$$typeof": "Symbol(react.element)"
            "_owner": [null]
            "_store": {}
            "key": [null]
            "props": {
              "children": "Sign up"
              "className": "btn btn-success center-block"
            }
            "ref": [null]
            "type": "button"
          }
        ]
        "className": "form-horizontal col-sm-6 col-sm-offset-3"
        "id": "registerForm"
        "onSubmit": {
          "__reactBoundArguments": [null]
          "__reactBoundContext": {
            "_reactInternalInstance": {
              "_context": {}
              "_currentElement": {
                "$$typeof": "Symbol(react.element)"
                "_owner": [null]
                "_store": {}
                "key": [null]
                "props": {}
                "ref": [null]
                "type": {
                  "displayName": "RegisterPage"
                }
              }
              "_instance": [Circular]
              "_mountOrder": 1
              "_pendingCallbacks": [null]
              "_pendingElement": [null]
              "_pendingForceUpdate": false
              "_pendingReplaceState": false
              "_pendingStateQueue": [null]
              "_renderedComponent": {
                "_currentElement": [Circular]
                "_renderedOutput": [Circular]
              }
              "_rootNodeID": ".2areu0fo5c"
              "_topLevelWrapper": [null]
            }
            "context": {}
            "getDOMNode": {
              "__reactBoundArguments": [null]
              "__reactBoundContext": [Circular]
              "__reactBoundMethod": [Function]
              "bind": [Function]
            }
            "handleFailedSubmit": {
              "__reactBoundArguments": [null]
              "__reactBoundContext": [Circular]
              "__reactBoundMethod": [Function]
              "bind": [Function]
            }
            "handleSubmit": [Circular]
            "handleSuccessfulSubmit": {
              "__reactBoundArguments": [null]
              "__reactBoundContext": [Circular]
              "__reactBoundMethod": [Function]
              "bind": [Function]
            }
            "props": {}
            "refs": {}
            "state": {
              "errorMessage": [null]
              "shouldShowErrorMessage": false
            }
            "updater": {
              "enqueueCallback": [Function]
              "enqueueCallbackInternal": [Function]
              "enqueueElementInternal": [Function]
              "enqueueForceUpdate": [Function]
              "enqueueReplaceProps": [Function]
              "enqueueReplacePropsInternal": [Function]
              "enqueueReplaceState": [Function]
              "enqueueSetProps": [Function]
              "enqueueSetPropsInternal": [Function]
              "enqueueSetState": [Function]
              "isMounted": [Function]
            }
          }
          "__reactBoundMethod": [Function]
          "bind": [Function]
        }
      }
      "ref": [null]
      "type": "form"
    }
    "id": "registerPageContainer"
  }
  "ref": [null]
  "type": "div"
 }
 */