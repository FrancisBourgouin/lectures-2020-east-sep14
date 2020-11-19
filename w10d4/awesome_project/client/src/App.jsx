import { useState } from 'react'

import Home from './components/Home';
import Landing from './components/Landing';
import Login from './components/Login';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Landing />
      <Login />
    </div>
  );
}

export default App;
