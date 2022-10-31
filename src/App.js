import axios from 'axios';
import Cocktail from './sites/Cocktail';
import Random from './sites/Random'
import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/random' element={<Random />} />
        <Route path='/cocktail' element={<Cocktail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
