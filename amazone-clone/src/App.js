import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="app">
    
        <Routes>
          <Route exact path="/logIn" element={<Login/>} ></Route>
          <Route exact path="/" element={<>  <Header /> <Home/> </>}></Route>
          <Route exact path="/checkout" element={ <><Header /> <Checkout/></> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
