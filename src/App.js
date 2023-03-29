import Navigation from './components/Navigation';
import Main from "./components/Main";
import CursorBlob from "./components/CursorBlob";

function App() {
  document.addEventListener("mousemove", (event) => {
    const { clientX, clientY} = event;
    const blob = document.querySelector("#blob");
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`,
    }, { duration: 8000, fill: "forwards"});
  });

  return (
    <div className="App">
      <div className='absolute top-0 left-0 h-full w-full z-[1] backdrop-blur-[200px]'></div>
      <Navigation />
      <Main />
      <CursorBlob />
    </div>
  );
}

export default App;
