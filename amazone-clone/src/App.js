import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Routes, Route } from "react-router-dom";
// import {Switch } from "react-router-dom";
function App() {
  return (
  
    <div className="app">
    <Routes>
    
        <Route path="/">
          <Header/>
          <Home />
        </Route>
  
    </Routes>
  </div>

  );
}

export default App;
