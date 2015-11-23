var $ = require("jquery");

var requireUnauthentication = function requireUnauthentication(nextState, replaceState, callback) {
    var token = localStorage.getItem("token");

    setTimeout(callback, 5000);

    $.ajax({
        url: "http://localhost:8132/checkToken?token=" + token,
        dataType: "json",
        type: "POST",
        data: {token: token},
        success: function(response) {
            if(response.status == "success") {
                return replaceState({}, "/dashboard");
            }
        },

        error: function(xhr, status, err) {
            console.log(err);
        }
    });

};

module.exports = requireUnauthentication;
