
import './App.css';
import {useState} from 'react';
import { data } from './data';
function App() {

  const [meetsMe, setMeetsMe] = useState(0);
  const{id, name, description, age, image} = data[meetsMe];
  const prevPerson = () => {
    setMeetsMe((meetsMe=>{
      meetsMe--;
      if(meetsMe<0) {
        meetsMe=data.length-1;
      }
      return meetsMe;
    }))
  }

  const nextPerson = () => {
    setMeetsMe((meetsMe => {
      meetsMe ++;
      if(meetsMe>data.length-1) {
        meetsMe=0;
      }
      return meetsMe;
    
    }))
    
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to Meets</h1>
          
          <div className='container'>
            <div>
            <img src={image} alt='meets portret' width='250px'/>
          </div>
          <div>
             <h2>{id} {name}</h2>
          </div>
          <div>
            <h3>{description}</h3>
          </div>
          <div>
            <h3>{age} years old</h3>
          </div>
          <div  className='btn'>
            <button onClick={prevPerson}>PREV</button>
            <button onClick={nextPerson}>NEXT</button>
          </div>
          </div>

          
        </div>
      </header>
    </div>
  );
}

export default App;
