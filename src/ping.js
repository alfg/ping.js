/**
 * Creates a Ping instance.
 * @returns {Ping}
 * @constructor
 */
var Ping = function() {};

/**
 * Pings source and triggers a callback when completed.
 * @param source Source of the website or server, including protocol and port.
 * @param callback Callback function to trigger when completed.
 * @param timeout Optional number of milliseconds to wait before aborting.
 */
Ping.prototype.ping = function(source, callback, timeout) {
    this.img = new Image();
    timeout = timeout || 0;
    var timer;

    var start = new Date();
    this.img.onload = this.img.onerror = pingCheck;
    if (timeout) { timer = setTimeout(pingCheck, timeout); }

    /**
     * Times ping and triggers callback.
     */
    function pingCheck() {
        if (timer) { clearTimeout(timer); }
        var pong = new Date() - start;

        if (typeof callback === "function") {
            callback(pong);
        }
    }

    this.img.src = source + "/?" + (+new Date()); // Trigger image load with cache buster
};
