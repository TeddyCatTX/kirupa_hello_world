import React, { Component } from 'react';
import './HelloWorld.css';
 
class HelloWorld extends Component {
  render() {
    return (
      <div className="helloContainer">
        <h1>Hello, world!</h1>
        <br />
        <a href="https://www.kirupa.com/react/setting_up_react_environment.htm" target="_blank">Setting Up Your React Dev Environment Easily</a>
      </div>
    );
  }
}
 
export default HelloWorld;