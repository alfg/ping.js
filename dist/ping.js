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

};

Ping.prototype.ping = function(source, callback) {
    this.callback = callback;
    this.img = new Image();
    this.start = new Date().getTime();

    this.img.onload = function() {
        console.log("loaded website");
    };

    this.img.onerror = function (e) {
        console.log(e);
        console.log("loaded website");
        if (typeof callback === "function" && callback()) {
            callback("rseponded", e);
        }
    };
    this.img.src = "http://" + source;
};

