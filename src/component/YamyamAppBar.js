import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { LOGOUT, useUserReducer } from "../api/userContext";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));

function ElevationScroll({children, window}) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function YamyamAppBar() {
  const classes = useStyles();

  const [state, dispatch] = useUserReducer();
  const { isLogin } = state;

  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const isMenuOpened = Boolean(userAnchorEl);

  const onUserMenuClicked = (e) => setUserAnchorEl(e.currentTarget);

  const onUserMenuClosed = () => setUserAnchorEl(null);

  const onLogoutClicked = (e) => {
    dispatch({ type: LOGOUT });
    onUserMenuClosed(e);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <RestaurantIcon edge="start" color="inherit" className={classes.icon}/>
            <Typography variant="h6" className={classes.title}>
              얌얌42
            </Typography>
            {isLogin && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={onUserMenuClicked}
                  color="inherit"
                >
                  <AccountCircle/>
                </IconButton>
                <Menu
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
      <Toolbar/>
    </>
  )
}
