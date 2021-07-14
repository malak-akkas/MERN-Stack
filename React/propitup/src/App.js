import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import PersonCard from './component/PersonCard ';

function App() {
  return (
    <div className="App">
 <PersonCard firstname="Dara" lastname="Rawagba" age={28} color="brown" />
 <PersonCard firstname="Mohannad" lastname="Salman" age={22} color="black" />
 <PersonCard firstname="Malak" lastname="Akkas" age={22} color="brown" />
 <PersonCard firstname="Tamara" lastname="Adeeb" age={26} color="brown" />
    </div>
  );
}

export default App;
