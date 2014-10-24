/*
 *  ping.js - v0.0.1
 *  Ping Utilities in Javascript
 *  http://github.com/alfg/ping.js
 *
 *  Made by Alfred Gutierrez
 *  Under MIT License
 */
/**
 * Creates a Ping instance.
 * @returns {Ping}
 * @constructor
 */
var Ping = function() {
    this._version = "0.0.1";

    this.img = new Image();

};

/**
 *
 * @param source
 * @param callback
 */
Ping.prototype.ping = function(source, callback) {
//    var _that = this;

    var start = new Date();
    var time = 0;

    this.img.onload = function() {
        console.log("loaded website");
    };

    this.img.onerror = function (e) {
        var pong = new Date() - start;
        time = pong;

        console.log(pong);
        if (typeof callback === "function" && callback()) {
            callback("responded", e);
        }
    };

    this.img.src = "//" + source;
};

