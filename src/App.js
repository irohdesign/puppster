import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import about from "./components/about";
import discover from "./components/discover";
import search from "./components/search";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/about" component={about} />
        <Route exact path="/discover" component={discover} />
        <Route exact path="/search" component={search} />
      </div>
    </Router>
  );
}

export default App;
