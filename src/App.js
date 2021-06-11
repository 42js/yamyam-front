import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import OrderPage from "./component/order/OrderPage";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">얌얌42</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <OrderPage />
      </Container>
    </>
  );
}

export default App;
