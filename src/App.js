import React from 'react';
import './App.css';
import Navbar from './components/index.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Homepage from './pages/Homepage';
import Review from './pages/Review';
import Info from './pages/Info';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/homepage' element={<Homepage/>} />
        <Route path='/info' element={<Info/>} />
        <Route path='/review' element={<Review/>} />
    </Routes>
    </Router>
);
}




export default App;