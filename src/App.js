import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Err404 from './pages/404';
import Container from './pages/Container';
import Design from './pages/Design';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='bg-gradient-to-br from-sky-800 to-neutral-400 max-h-screen overflow-hidden' >
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Design/>} />
        <Route exact path="*" element={<Err404 />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
