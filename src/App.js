/* eslint-disable */
import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Quote from './components/Quote';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
