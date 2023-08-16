import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"

let name = "Nitish"

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "#ffffff";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  }

  return (
    //react jsx fragment (empty tag for enclosing various tags/components)
    <>  
    <Navbar title="textUtil.io" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
