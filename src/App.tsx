import React from "react";
import "./App.css";
import Blob from "components/Blob";
import Navigation from "components/Navigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Blob />
    </div>
  );
};

export default App;
