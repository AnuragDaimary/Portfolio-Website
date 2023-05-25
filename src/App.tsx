import React from "react";
import "./App.css";
import Blob from "components/Blob";
import Navigation from "components/Navigation";
import Main from "components/Main";
import SelectedWork from "components/SelectedWork";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Main />
        <SelectedWork />
      </div>
      <Blob />
    </div>
  );
};

export default App;
