import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SelectCompany from './pages/SelectCompany';
import SelectHelp from './pages/SelectHelp';
import FinalityPage from './pages/FinalityPage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SelectCompany}/>
    <Route path="/finalidades" exact component={SelectHelp}/>
    <Route path="/finalidades/escolha" component={FinalityPage}/>
  </BrowserRouter>
);

export default Routes;