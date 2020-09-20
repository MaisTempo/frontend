import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SelectCompany from './pages/SelectCompany';
import SelectHelp from './pages/SelectHelp';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SelectCompany}/>
    <Route path="/finalidades/:id" component={SelectHelp}/>
  </BrowserRouter>
);

export default Routes;