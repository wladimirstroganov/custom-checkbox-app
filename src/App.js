import React, { Component } from 'react';
import './App.css';
import CustomCheckbox from "./components/custom-checkbox/custom-checkbox.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomCheckbox checked={true}></CustomCheckbox>
      </div>
    );
  }
}

export default App;
