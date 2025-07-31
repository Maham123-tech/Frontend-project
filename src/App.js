// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './Services';
import TeamPage from './pages/TeamPage'; // Updated path to include pages folder
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <TeamPage />
    </div>
  );
}

export default App;