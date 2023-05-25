import React from "react";
import "./App.css";
import Blob from "components/Blob";
import Navigation from "components/Navigation";
import Main from "components/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Main />
      </div>
      <Blob />
    </div>
  );
};

export default App;
