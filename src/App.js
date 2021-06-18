import React from 'react';
import {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';

import OrderPage from "./component/order/OrderPage";
import LandingPage from "./component/landing/LandingPage";
import YamyamAppBar from "./component/YamyamAppBar";

export default function App() {

  const [auth, setAuth] = useState(false);

  const onLoginClicked = (e) => {
    // TODO: API와 연동해야 함
    setAuth(true);
  };

  return (
    <>
      <CssBaseline />
      <YamyamAppBar auth={auth} setAuth={setAuth} />
      <Container>
        { auth ? <OrderPage /> : <LandingPage onLoginClicked={onLoginClicked}/> }
      </Container>
    </>
  );
}
