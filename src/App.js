import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar aboutText="About" title="react-app" />
      {/* <h1>Gulshan</h1> */}
      <div className='container'>
        <TextForm heading = "Enter text here" />
      </div>
    </>
  );
}

export default App;
