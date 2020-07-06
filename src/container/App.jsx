import React from 'react';

import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Prom from '../components/Prom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WrapperCards from '../components/WrapperCards'


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <WrapperCards />
      <Prom />
      <Contact />
      <Footer />

    </>
  );
};

export default App;
