import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import MyProduct from './Components/MyProduct';
import Review from './Components/Review';
import Footer from './Components/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
      <MyProduct/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
