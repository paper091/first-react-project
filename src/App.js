import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"
import Alert from './components/Alert';

let name = "Nitish"

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "#ffffff";
      raiseAlert("Welcome to the dark side", "dark")  
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      raiseAlert("Welcome to the light", "light")
    }
  }

  const raiseAlert = (msg, t)=>{
    setAlert({
      message: msg,
      type: t
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  // setAlert("Welcome", "success");

  return (
    //react jsx fragment (empty tag for enclosing various tags/components)
    <>  
    <Navbar title="textUtil.io" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode} raiseAlert={raiseAlert}/>
    </div>
    </>
  );
}

export default App;
