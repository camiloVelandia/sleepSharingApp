import React from 'react';
import '../styles/main.scss';
import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  );
};

export default App;
