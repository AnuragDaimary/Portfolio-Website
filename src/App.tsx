import React from "react";
import "./App.css";
import Blob from "components/Blob";
import Navigation from "components/Navigation";
import Main from "components/Main";
import SelectedWork from "components/SelectedWork";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "components/About";
import PageNotFound from "components/PageNotFound";
import Loblaws from "components/Loblaws";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <SelectedWork />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/loblaws" element={<Loblaws />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Blob />
      </Router>
    </div>
  );
};

export default App;
