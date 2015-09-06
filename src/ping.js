/**
 * Creates a Ping instance.
 * @returns {Ping}
 * @constructor
 */
var Ping = function() {
    this._version = "0.0.1";
};

/**
 * Pings source and triggers a callback when completed.
 * @param source Source of the website or server.
 * @param callback Callback function to trigger when completed.
 */
Ping.prototype.ping = function(source, callback) {
    this.img = new Image();

    var start = new Date();

    var time = 0;

    this.img.onload = function() {
        pingCheck();
    };

    this.img.onerror = function () {
        pingCheck();
    };

    /**
     * Times ping and triggers callback.
     */
    var pingCheck = function() {
        var pong = new Date() - start;
        time = pong;

        if (typeof callback === "function") {
            callback(pong);
        }
    };

    this.img.src = "//" + source + "/?" + new Date().getTime(); // Trigger image load with cache buster
};

