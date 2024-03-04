import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homescreen';
import Navbar from './Pages/Navbar.jsx';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
