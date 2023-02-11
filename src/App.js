import logo from './logo.svg';
import './App.scss';
import Todopage from './pages/Todopage';
import Notespage from './pages/Notespage';
import Schedulepage from './pages/Schedulepage';
import About from './pages/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [toggle, setToggle] = useState(false);





  return (
    <div className="App">
      
      <BrowserRouter> 
      <Routes> 
      <Route path="/" element={<Notespage darkMode ={darkMode} setDarkMode={setDarkMode} toggle={toggle} setToggle={setToggle}/>}/>
      <Route path="/todo" element={<Todopage darkMode ={darkMode} setDarkMode={setDarkMode}  toggle={toggle} setToggle={setToggle}/>}/>
      <Route path="/schedule" element={<Schedulepage darkMode ={darkMode} setDarkMode={setDarkMode}  toggle={toggle} setToggle={setToggle}/>}/>
      <Route path="/about" element={<About darkMode ={darkMode} setDarkMode={setDarkMode}  toggle={toggle} setToggle={setToggle}/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
