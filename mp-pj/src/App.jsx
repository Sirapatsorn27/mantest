import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Mainpage from './pages/Mainpage';
import Formreqeust from './pages/Formreqeust';
import Approve from './pages/Approve';
import Dashboard from './pages/Dashboard';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar - Fixed at top */}
        <Navbar />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Fixed at left */}
          <Sidebar />
          
          {/* Content Area - Scrollable */}
          <main className="flex-1 overflow-y-auto bg-gray-100">
            <Routes>
              <Route path='/' element={<Mainpage />} />
              <Route path='/requestform' element={<Formreqeust />} />
              <Route path='/approve' element={<Approve />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='*' element={<Notfound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;