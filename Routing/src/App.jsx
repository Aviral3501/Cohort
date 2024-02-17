import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Link to="/" ><button>Landing</button></Link>
        <Link to="/dashboard" ><button>Dashboard</button></Link>
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
