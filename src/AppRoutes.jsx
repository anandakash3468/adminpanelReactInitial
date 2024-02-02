import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect, Routes, Navigate } from 'react-router-dom';
// import Dashboard from "";
// import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./page/Dashboard'));



class AppRoutes extends Component {
  render () {
    return (
     
        <Routes>
          <Route exact path="/dashboard" component={ Dashboard } />
         
        </Routes>
     
    );
  }
}

export default AppRoutes;


/*
          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />
*/ 