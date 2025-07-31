// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './Services';
import TeamPage from './pages/TeamPage';
import CustomerReviews from './pages/CustomerReviews';
import CaseStudiesPage from './pages/CaseStudiesPage';
import GreatSoftwarePage from './pages/GreatSoftwarePage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <TeamPage />
      <CustomerReviews />
      <CaseStudiesPage /> 
      <GreatSoftwarePage />
    </div>
  );
}

export default App;