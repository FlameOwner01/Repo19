// src/index.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// add the following code below this line

class App extends Component {
  render(){
    const world = "World"
    return(
      // Change code below this line

      // Change code above this line
      <div className ="App">
        <h1>Hello, {world}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));