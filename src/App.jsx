import './App.css';
import {useState} from 'react';
import { useEffect } from "react"

function App() {
 /* const [name, setName] = useState("Amanda");
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
}*/

/*
const [count, setCount] = useState(0);

//1 - UseEffect utilização
useEffect(() => {
  console.log("Roda a cada renderização")
}
);
return (
  <div className="Effect1">
  <div>
    <button onClick={() => setCount ((prevCount) => prevCount + 1)}>
      Renderizar
    </button>
    <p>{count}</p>
  </div>
</div>
);
}*/


const [count, setCount] = useState(0);
const [countB, setCountB] = useState(10);

useEffect(() => {
  console.log("Roda a cada renderização")
}
);

// 2 - ARRAY DE DEPENDÊNCIA
useEffect(() => {
  console.log("Só roda ao incrementar o valor");
}, [count]);

  return (
    <div className="Effect2">
    <div>
      <button onClick={() => setCount ((prevCount) => prevCount + 1)}>
        Renderizar 
      </button>
      <p>{count}</p>
    </div>
    <div>
      <button onClick={() => setCountB ((prevCount) => prevCount + 1)}>
        Renderizar B
      </button>
      <p>{countB}</p>
    </div>
  </div>
  );
  }

export default App;
