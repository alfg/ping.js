import React from 'react';
import ReactDOM from 'react-dom';

import Ping from '../ping.js';

class App extends React.Component {
  constructor() {
    super();

    this.p = new Ping();

    this.state = {
      google: 0,
      apple: 0,
      microsoft: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.p.ping("http://google.com", (err, data) => {
      if (err) {
        console.log("error loading resource", err);
      }
      this.setState({ google: data });
    });

    this.p.ping("http://apple.com", (err, data) => {
      if (err) {
        console.log("error loading resource", err);
      }
      this.setState({ apple: data });
    });

    this.p.ping("http://microsoft.com", (err, data) => {
      if (err) {
        console.log("error loading resource", err);
      }
      this.setState({ microsoft: data });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Pings</button>
        <ul>
          <li>google.com <span>{this.state.google}</span></li>
          <li>apple.com <span>{this.state.apple}</span></li>
          <li>microsoft.com <span>{this.state.microsoft}</span></li>
        </ul>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);