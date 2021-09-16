import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Router>
        
      <Create path="/player/new" />  
      

      </Router>
    </div>
  );
}

export default App;
