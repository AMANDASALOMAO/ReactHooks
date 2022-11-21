import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("Amanda");
  const [number, setNumber] = useState(1);

  console.log(name);

  const changeNumber = () => {
    //Previous value
    setNumber((prevNumber) => prevNumber + 1);
    setNumber(number + 1);
  }

  return(
<div>
  <h1>UseState Example</h1>
  <h3>Meu nome é: {name}</h3> 
   <input type= "text" value={name} onChange= { e => setName(e.target.value)}></input>
   <div>
  <p>Numero: {number}</p>
  <button onClick={changeNumber}>Mudar numero</button>

  </div>
</div>
  );
}

export default App;
