import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState(null);

  const toggleMode = ()=>{
    // console.log("entd here");
    // console.log(color);
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      document.title = 'Dark Mode';
    }else if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.title = 'Light Mode';
    } 
  }

  const getColor = (e) => { 
    console.log(e.target.value) 
    setColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
      document.title = 'custom Mode';
    // setTimeout(() => {
    //   toggleMode();
    // }, 1000);
    // 
  }

  return (
    <>
    <Router>
      <Navbar aboutText="About" title="react-app"  mode={mode} toggle={toggleMode} getcolor = {getColor} />
      {/* <h1>Gulshan</h1> */}
      <div className='container'>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/textform" element={<TextForm heading = "Enter text here" mode={mode} />} />
        </Routes>
        {/* <TextForm heading = "Enter text here" mode={mode} />
        <About  /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
