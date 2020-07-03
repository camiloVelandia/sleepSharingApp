import React from 'react';
import '../styles/main.scss';
import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
