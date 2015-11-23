var $ = require("jquery");

var requireAuth = function requireAuth(nextState, replaceState, callback) {
    var token = localStorage.getItem("token");

    setTimeout(callback, 5000);

    $.ajax({
        url: "http://localhost:8132/checkToken?token=" + token,
        dataType: "json",
        type: "POST",
        data: {token: token},
        success: function(response) {
            if(response.status != "success") {
                console.log("invalid token");
                return replaceState({}, "/login");
            }
        },

        error: function(xhr, status, err) {
            console.log(err);
        }
    });

};

module.exports = requireAuth;