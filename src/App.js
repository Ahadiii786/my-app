import './App.css';
import Navbar from "./components/Navbar"
import TextArea from "./components/TextArea"
import About from "./components/About"
import { useState } from 'react';

function App() {
  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light')
    {
      setmode("dark");
      document.body.style.backgroundColor = '#3d3938';
      document.title='textutlies-darkmode';
    }
    else
    setmode("light");
    document.body.style.backgroundColor='white';
    document.title='textutlies-mode';

  }
  return (
<>
<Navbar title="Maaz" about="About us" mode={mode} togglemode={togglemode}/>
<TextArea heading="Enter text to be Analyzed"/>
<About/>
</>
  );
}

export default App;
