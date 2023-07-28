// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
function App() {
  return (
    <div className="App">
      <Greet name="Krishna" nickName="kittu"><p>This is a short intro...</p></Greet>
      <Greet name="Prasad" nickName="kittu"/>
      <Welcome name="siri" nickName="siriii"><p>This is a short intro...</p></Welcome>
    </div>
  );
}

export default App;
