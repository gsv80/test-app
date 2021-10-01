import {useState } from 'react';
import Nav from './components/Nav';
import Tweet from './components/Tweet';
import './App.css';

function App() {
 
  const [toggle, setToggle]= useState(false);
  
  const toggler =() => {
    setToggle(prev => !prev);
  }
  
     
  return (
    <div className="App">
      
        <Nav toggle={toggle} setToggle={toggler} />
        <h2>Hello world</h2>
        <Tweet />

    </div> 
  );
}

export default App;
