import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  handleClick = () => {
    window.open('https://www.kirupa.com/react/setting_up_react_environment.htm', '_blank');
  };

  render() {
    return (
      <div className="helloContainer">
        <h1>Hello, world!</h1>
        <br />
        <button onClick={this.handleClick}>Creating our HelloWorld App</button>
      </div>
    );
  }
}

export default HelloWorld;
