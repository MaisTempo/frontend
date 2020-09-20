import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SelectCompany from './pages/SelectCompany';
import SelectHelp from './pages/SelectHelp';
import FinalityPage from './pages/FinalityPage';
import StepByStep from './pages/StepByStep';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={SelectCompany}/>
    <Route path="/finalidades" exact component={SelectHelp}/>
    <Route path="/finalidades/escolha" exact component={FinalityPage}/>
    <Route path="/finalidades/escolha/passoapasso" component={StepByStep}/>
  </BrowserRouter>
);

export default Routes;