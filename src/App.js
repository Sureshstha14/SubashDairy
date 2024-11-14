import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import MyProduct from './Components/MyProduct';
import Review from './Components/Review';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';

// Bootstrap JS (if needed globally)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <HomePage/> */}
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <MyProduct />
        <Review />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
