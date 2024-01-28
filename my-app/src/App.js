import React, { useState } from 'react';
//import './App.css';
import Counter from "./Components/Counter";
import ClassCounter from './Components/classCounter';


function App() {

  
  const [input, setInput] = useState("Some input");

  
  
  return (
    <div className="App">
      <h1>{input}</h1>
      <input type='text' value={input} onChange={event => setInput(event.target.value)}></input>
      <Counter />
      <ClassCounter/>
    </div> 
  );
}



export default App;
