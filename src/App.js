import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"

let name = "Nitish"

function App() {
  return (
    //react jsx fragment (empty tag for enclosing various tags/components)
    <>  
    <Navbar title="textUtil.io"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
