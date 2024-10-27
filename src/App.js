import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import MyProduct from './Components/MyProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
      <MyProduct/>
    </div>
  );
}

export default App;
