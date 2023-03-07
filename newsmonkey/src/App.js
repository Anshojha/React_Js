import "./App.css";

import { Router, Routes, Route } from "react-router-dom";

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
              exact
              path="/"
              element={<News pageSize={6} country="in" category="sports" />}
            />
            
          </Routes>
        </Router>
      </div>
    );
  }
}
