import "./App.css";

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact path="/about"
              element={<News />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
