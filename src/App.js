import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    console.log('entered here');
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      document.title = 'Dark Mode';
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.title = 'Light Mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar aboutText="About" title="react-app"  mode={mode} toggle={toggleMode} />
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
