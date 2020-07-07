import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Prom from '../components/Prom';
import Contact from '../components/Contact';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';
// import Details from '../components/Details';
// import Carousel from '../components/Carousel';
// import Login from '../components/Login';
// import RegisterRoom from '../components/RegisterRoom';
// import Register from '../components/Register';
// import Banner from '../components/Banner';
// import Cards from '../components/Cards';
// // import Sppiner from '../general/Sppiner';
// import PageNotFound from '../general/ PageNotFound';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <CardContainer />
            <Prom />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
