import React from 'react';
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';

import YamyamAppBar from "./component/YamyamAppBar";
import AuthPage from "./component/auth/AuthPage";
import { UserProvider } from './api/userContext';
import MainPage from './component/MainPage';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default function App() {
  return (
    <UserProvider>
      <CssBaseline/>
      <YamyamAppBar/>
      <Container>
        <Switch>
          <Route
            exact path="/"
            component={MainPage}
          />
          <Route
            exact path="/auth"
            component={AuthPage}
          />
        </Switch>
      </Container>
    </UserProvider>
  );
}
