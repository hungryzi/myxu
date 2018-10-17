import React, { Component } from 'react';
import './App.css';
import MintForm from './components/MintForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MyXu</h1>
          <h3>Welcome to the world of digital sentimental objects!</h3>
          <MintForm />
        </header>
      </div>
    );
  }
}

export default App;
