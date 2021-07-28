import './App.css';
import Component1 from './components/Component1';
import Form from './components/Form';
import {useState} from 'react'
import { Router } from '@reach/router';

function App() {
  
  const [returnedTypeVal, setReturnedTypeVal] = useState();
  const [returnedId, setReturnedId] = useState();


  const takeData = (typeVal,id)=>{
    setReturnedId(id);
    setReturnedTypeVal(typeVal);
    
  }

  return (
    <div className="App">
      <Form putData={takeData}/>
      <Router>
      
      <Component1 typeVal={returnedTypeVal} cmpId={returnedId} path=":/typeVal/:cmpId/" />
      </Router>


    </div>
  );
}

export default App;

