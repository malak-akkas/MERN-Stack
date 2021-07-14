import './App.css';
import React, { component } from 'react';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
<Card firstname="Malak" lastname="Akkas" age={22} color="Black" />
<Card firstname="Eman" lastname="Nazzal" age={44} color="Brown" />

    </div>
  );
}


export default App;