/**
 * Creates a Ping instance.
 * @returns {Ping}
 * @constructor
 */
var Ping = function(opt) {
    this.opt = opt || {};
    this.favicon = this.opt.favicon || "/favicon.ico";
    this.timeout = this.opt.timeout || 0;
};

/**
 * Pings source and triggers a callback when completed.
 * @param source Source of the website or server, including protocol and port.
 * @param callback Callback function to trigger when completed. Returns error and ping value.
 * @param timeout Optional number of milliseconds to wait before aborting.
 */
Ping.prototype.ping = function(source, callback) {
    this.img = new Image();
    var timer;

    var start = new Date();
    this.img.onload = pingCheck;
    this.img.onerror = pingCheck;
    if (this.timeout) { timer = setTimeout(pingCheck, this.timeout); }

    /**
     * Times ping and triggers callback.
     */
    function pingCheck(e) {
        if (timer) { clearTimeout(timer); }
        var pong = new Date() - start;

        if (typeof callback === "function") {

            if (typeof callback === "function") {
                if (typeof e === 'undefined' || typeof e.type === 'undefined') {
                    console.error("timeout error");
                    return callback("timeout", pong);
                }
                if (e.type === "error") {
                    console.error("error loading resource");
                    return callback("error", pong);
                }
                //return callback(null, pong); // commented to give out a more informative string
                return callback("success", pong);
            }
    }

    this.img.src = source + this.favicon + "?" + (+new Date()); // Trigger image load with cache buster
};
