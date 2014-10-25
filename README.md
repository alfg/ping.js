# Ping.js

Ping.js is a small and simple Javascript library to ping response times to servers in pure Javascript! This is useful for when you want to display realtime ping times on a status page which are relative to the user.

JS Fiddle Example: http://jsfiddle.net/yLc8gnkr/

## Usage

```javascript
var p = new Ping();
 
p.ping("guildbit", function(data) {
  document.getElementById("ping-guildbit").innerHTML = data;
});
```

## API

```javascript
var p = new Ping();
```

### p.ping(source, callback)

Creates a ping request to the `source`. 

`source` IP address or website URL.

`callback` Callback function which returns the response time in milliseconds.

## Notes

Javscript itself doesn't have a native way of sending a "ping", so results may not be completely accurate. Since ajax requests are affected by cross-domain issues (CORS), they are blocked by default. `ping.js` is using a method of faking an image loading from any host and timing the response time. If there's a better way to do this in Javascript, feel free to create an issue, or pull request so I can review.

## License

[MIT License](http://alfg.mit-license.org/) © Alfred Gutierrez
