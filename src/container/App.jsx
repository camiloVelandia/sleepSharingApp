import React from 'react';

import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Prom from '../components/Prom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RegisterRoom from '../components/RegisterRoom';
// import Banner from '../components/Banner';
// import Cards from '../components/Cards';
// import Sppiner from '../general/Sppiner'
// import PageNotFound from '../general/ PageNotFound'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Hero />
      {/* <Cards /> */}
      {/* <PageNotFound /> */}
      <Prom />
      {/* <Banner /> */}
      <Contact />
      <RegisterRoom />

      <Footer />
      {/* <Sppiner /> */}
    </>
  );
};

export default App;
