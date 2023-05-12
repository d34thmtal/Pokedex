import React, { useState } from "react";
import './App.css';
import "./componenti/componenti.css"
import Pokedex from './Pokedex';
import Login from "./componenti/Login";
import Register from "./componenti/Register";


function App() {
  const [currentState, setCurrentState] = useState('login')

  const toggleState = (stateName) => {
    setCurrentState(stateName);
  }

  const stateSwitch = () => {
    if (currentState === 'login'){
      return <Login onStateSwitch={toggleState} />
    }
  else if (currentState === 'register'){
      return <Register onStateSwitch={toggleState} />
    }
  else if (currentState === 'pokedex'){
      return <Pokedex onStateSwitch={toggleState} />
    }
  }


  return (
    <div className="App">

      {stateSwitch()}
    </div>
  );
}

export default App;
