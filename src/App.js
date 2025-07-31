// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './Services';
import TeamPage from './pages/TeamPage';
import CustomerReviews from './pages/CustomerReviews';
import CaseStudiesPage from './pages/CaseStudiesPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <TeamPage />
      <CustomerReviews />
      <CaseStudiesPage /> {/* Moved this to the end */}
    </div>
  );
}

export default App;