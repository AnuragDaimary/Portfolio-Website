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
    }, { duration: 3000, fill: "forwards"});
  });

  return (
    <div className="App">
      <Navigation />
      <Main />
      <CursorBlob />
    </div>
  );
}

export default App;
