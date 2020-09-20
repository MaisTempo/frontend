import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SelectCompany from './pages/SelectCompany';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SelectCompany}/>
  </BrowserRouter>
);

export default Routes;