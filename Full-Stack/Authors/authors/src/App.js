import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/authors"/>
        <Create path="/authors/new" />
        <Update path="authors/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
