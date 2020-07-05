import React from 'react';

import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Prom from '../components/Prom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Details from '../components/Details';
// import Carousel from '../components/Carousel';
// import Login from '../components/Login';
// import RegisterRoom from '../components/RegisterRoom';
// import Register from '../components/Register';
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
      <Prom />
      <Contact />
      <Details />
      {/* <Carousel /> */}
      {/* <Login /> */}
      <Footer />
      {/* <Cards /> */}
      {/* <PageNotFound /> */}
      {/* <Register /> */}
      {/* <Banner /> */}
      {/* <RegisterRoom /> */}

      {/* <Sppiner /> */}
    </>
  );
};

export default App;
