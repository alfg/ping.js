# Ping.js

Ping.js is a small and simple Javascript library to ping response times to servers in pure Javascript! This is useful for when you want to display realtime ping times on a status page which are relative to the user.

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

## License

[MIT License](http://alfg.mit-license.org/) © Alfred Gutierrez
