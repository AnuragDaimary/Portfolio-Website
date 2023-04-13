import Navigation from './components/Navigation';
import CursorBlob from "./components/CursorBlob";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Loblaws from './components/Projects/Loblaws';

function App() {

  document.addEventListener("mousemove", (event) => {
    const { clientX, clientY} = event;
    const blob = document.querySelector("#blob");
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`,
    }, { duration: 8000, easing: "ease-in", fill: "forwards"});
  });

  useEffect(() => {
    const blob = document.querySelector("#blob");
    blob.style.top = "50%";
    blob.style.left = "50%";
    blob.style.display = "block";
  }, [])

  return (
    <div className="App">
      <div className='fixed top-0 left-0 h-full w-full z-[1] backdrop-blur-[200px]'></div>
      <Router>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/loblaws' element={<Loblaws />} />
      </Routes>
      </Router>
      <CursorBlob />
    </div>
  );
}

export default App;
