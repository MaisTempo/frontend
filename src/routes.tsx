import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SelectCompany from './pages/SelectCompany';
import SelectHelp from './pages/SelectHelp';
import FinalityPage from './pages/FinalityPage';
import StepByStep from './pages/StepByStep';
import Home from './pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home}/>
    <Route path="/start" exact component={SelectCompany}/>
    <Route path="/finalidades" exact component={SelectHelp}/>
    <Route path="/finalidades/escolha" exact component={FinalityPage}/>
    <Route path="/finalidades/escolha/passoapasso" exact component={StepByStep}/>
  </BrowserRouter>
);

export default Routes;