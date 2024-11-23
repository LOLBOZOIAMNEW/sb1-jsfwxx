import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import MedicalProfessionals from './components/MedicalProfessionals';
import HealthcareImpact from './components/HealthcareImpact';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <MedicalProfessionals />
      <HealthcareImpact />
      <Contact />
    </div>
  );
}

export default App;