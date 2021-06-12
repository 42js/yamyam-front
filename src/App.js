import React from 'react';
import {useState} from "react";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";

import OrderPage from "./component/order/OrderPage";
import {makeStyles} from "@material-ui/core/styles";
import LandingPage from "./component/landing/LandingPage";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
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

export default function App() {
  const classes = useStyles();

  const [auth, setAuth] = useState(false);
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const isMenuOpened = Boolean(userAnchorEl);

  const onLoginClicked = (e) => {
    // TODO: API와 연동해야 함
    setAuth(true);
  };

  const onUserMenuClicked = (e) => {
    setUserAnchorEl(e.currentTarget);
  };

  const onUserMenuClosed = (e) => {
    setUserAnchorEl(null);
  };

  const onLogoutClicked = (e) => {
    // TODO: API와 연동해야 함
    setAuth(false);
    onUserMenuClosed(e);
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <RestaurantIcon edge="start" color="inherit" className={classes.icon} />
            <Typography variant="h6" className={classes.title}>
              얌얌42
            </Typography>
            { auth && (
              <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onUserMenuClicked}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={userAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isMenuOpened}
                onClose={onUserMenuClosed}
              >
                <MenuItem onClick={onUserMenuClosed}>프로필</MenuItem>
                <MenuItem onClick={onLogoutClicked}>로그아웃</MenuItem>
              </Menu>
            </div>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        { auth ? <OrderPage /> : <LandingPage onLoginClicked={onLoginClicked}/> }
      </Container>
    </>
  );
}
