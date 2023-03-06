import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Err404 from './pages/404';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='bg-blue-200 min-h-screen' >
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Err404 />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
