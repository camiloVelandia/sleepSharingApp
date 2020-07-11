import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../GlobalStyles';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Details from '../pages/Details';
import Favs from '../pages/Favs';
import NewRoom from '../pages/NewRoom';
import PageNotFound from '../general/ PageNotFound';
import Layout from '../components/Layout/index';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Details" component={Details} />
            <Route exact path="/Favs" component={Favs} />
            <Route exact path="/NewRoom" component={NewRoom} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
