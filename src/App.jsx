import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DomainSearch from './components/DomainSearch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DomainSearch/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
