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
        if (typeof callback == 'function' && callback()) {
            callback('rseponded', e);
        }
    };
    this.img.src = "http://" + source;
};

function Callback() {
    "sample callback"
    console.log("called back!");
};
