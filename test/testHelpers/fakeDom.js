
module.exports = function(markup) {
    if (typeof document !== 'undefined') return;
    var jsdom = require('jsdom').jsdom;
    global.document = jsdom(markup || '');
    global.window = document.parentWindow;
    global.navigator = {
        userAgent: 'node.js'
    };
};

/*var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};*/
