import React from "react";
import Home from './home';
import Congratulation from './congratulation';
import Page404 from './page404';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sucesso" component={Congratulation} />
        <Route component={Page404} />
      </Switch>
    )
}