import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import HotelConcept from '../components/HotelConcept';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Welcome />
      <HotelConcept />
    </main>
  );
};

export default Home;