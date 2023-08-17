import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

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
      document.title = "darkUtils";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      raiseAlert("Welcome to the light", "light")
      document.title = "textUtils.io"
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


  // example from official docs
  // works but not working with <Link to=""></Link> in Navbar.js
  // using Harry's routing method for now (from react-router-dom v5.~ docs)
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm heading="Enter the text to analyze" mode={mode} raiseAlert={raiseAlert}/>,
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   }
  // ]);


  return (
    //react jsx fragment (empty tag for enclosing various tags/components)
    <>  
    <BrowserRouter>

    <Navbar title="textUtil.io" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <Routes>
      <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} raiseAlert={raiseAlert}/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    
    
    {/* <Link to={router}>abt</Link> */}

    {/* 
    from react-router-dom v6 ignoring for now
    as currently using v5's method 
    <RouterProvider router={router} />
    */}
    
    {/* <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode} raiseAlert={raiseAlert}/>
    </div> */}

    </BrowserRouter>
    </>
  );
}

export default App;
