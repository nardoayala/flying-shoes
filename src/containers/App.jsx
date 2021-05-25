import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';

const App = () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Layout>
  </Switch>
);

export default App;
