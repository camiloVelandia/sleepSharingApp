import React from 'react';

import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Hero from '../components/Hero'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Sppiner from '../general/Sppiner'
// import PageNotFound from '../general/ PageNotFound'


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      {/* <PageNotFound /> */}
      <Contact />
      <Footer />
      {/* <Sppiner /> */}
    </>
  );
};

export default App;
