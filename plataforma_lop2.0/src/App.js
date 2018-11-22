import React, { Component } from 'react';
import Navbar from './componetes/Navbar';
import Cadastro from './componetes/Cadastro';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Cadastro/>
      </div>
    );
  }
}

export default App;
