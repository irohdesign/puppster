import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import navbar from "./components/navbar";
import about from "./components/about";
import discover from "./components/discover";
import search from "./components/search";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={navbar} />
        <Route exact path="/about" component={about} />
        <Route exact path="/blog" component={discover} />
        <Route path="/contact" component={search} />
      </div>
    </Router>
  );
}

export default App;
