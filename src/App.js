
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Components
import Navbar1 from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import MyProduct from './Components/MyProduct';
import Review from './Components/Review';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1/>
        {/* <HomePage/> */}
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>

        <MyProduct />
        <Review />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
