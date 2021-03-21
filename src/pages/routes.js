import React from "react";
import Home from './home';
import Postvagas from './postvagas';
import Congratulation from './congratulation';
import Getvagas from './getvagas';
import Page404 from './page404';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro" component={Postvagas} exact />
        <Route path="/cadastrosucesso" component={Congratulation} exact />
        <Route path="/consulta" component={Getvagas} />
        <Route component={Page404} />
      </Switch>
    )
}