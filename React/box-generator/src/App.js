import react, { useState } from 'react';
import './App.css';
import NewBox from './components/NewBox';
import DisplayBox from './components/DisplayBox';


function App() {

  const [currentClr, setCurrentClr] = useState([]);
  
  const sendClr = ( clr ) => {
    setCurrentClr([...currentClr,clr]);
  }

  return (
    <div className="App" >
      <NewBox onSend= {sendClr} />
      <DisplayBox color={ currentClr } />
      
    </div>
  );
}

export default App;
