import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
