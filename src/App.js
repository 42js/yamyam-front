import React from 'react';
import {useState} from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';

import OrderPage from "./component/order/OrderPage";
import LandingPage from "./component/landing/LandingPage";
import YamyamAppBar from "./component/YamyamAppBar";
import AuthPage from "./component/auth/AuthPage";

export default function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <CssBaseline/>
      <YamyamAppBar auth={auth} setAuth={setAuth}/>
      <Container>
        <Switch>
          <Route
            exact path="/"
            render={() => (
              auth ?
              <OrderPage /> :
                <LandingPage />
            )}
          />
          <Route
            exact path="/auth"
            render={() => (<AuthPage setAuth={setAuth}/>)}
          />
        </Switch>
      </Container>
    </>
  );
}
