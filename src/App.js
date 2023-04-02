import Navigation from './components/Navigation';
import Main from "./components/Main";
import CursorBlob from "./components/CursorBlob";
import { useEffect, useState } from 'react';
import Work from './components/Work';

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
      <Navigation />
      <Main />
      <Work />
      <CursorBlob />
    </div>
  );
}

export default App;
