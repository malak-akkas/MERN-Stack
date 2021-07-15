
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
      <PersonCard firstName="Smite" lastName="John" age={88} hairColor="Brown"/>
      <PersonCard firstName="Fillmore" lastName="Millard" age={55} hairColor="Brown"/>
      <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown"/>
      
    </div>
  );
}

export default App;
