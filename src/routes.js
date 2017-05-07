import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeIndex from './components/home/index';
import VehiclesIndex from './components/vehicles/index';
import StoresIndex from './components/stores/index';
import DirectSalesIndex from './components/direct-sales/index';

const Routes = () => (
  <div className="container-fluid">
    <Switch>
      <Route exact path="/" component={HomeIndex} />
      <Route exact path="/vehicles" component={VehiclesIndex} />
      <Route exact path="/stores" component={StoresIndex} />
      <Route exact path="/direct-sales" component={DirectSalesIndex} />
    </Switch>
  </div>
);

export default Routes;
