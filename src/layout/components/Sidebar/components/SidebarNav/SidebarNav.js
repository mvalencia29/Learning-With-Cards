/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { NavLink as RouterLink, useHistory } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, colors, Hidden } from "@material-ui/core";

//Iconos Slider
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const SidebarNav = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const history = useHistory();

  const logOut = () => {
    sessionStorage.clear();
    history.push("/");
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.item} disableGutters key="Dashboard">
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={CustomRouterLink}
          to="/dashboard"
        >
          <div className={classes.icon}>
            <HomeIcon />
          </div>
          Dashboard
        </Button>
      </ListItem>
      <ListItem className={classes.item} disableGutters key="Buscar">
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={CustomRouterLink}
          to="/operadores"
        >
          <div className={classes.icon}>
            <SearchIcon />
          </div>
          Buscar
        </Button>
      </ListItem>
      <ListItem className={classes.item} disableGutters key="Buscar">
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={CustomRouterLink}
          to="/operadores"
        >
          <div className={classes.icon}>
            <ViewModuleIcon />
          </div>
          Cards
        </Button>
      </ListItem>
      <ListItem className={classes.item} disableGutters key="Buscar">
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={CustomRouterLink}
          to="/operadores"
        >
          <div className={classes.icon}>
            <PermIdentityIcon />
          </div>
          Perfil
        </Button>
      </ListItem>
      <Hidden lgUp>
        <ListItem className={classes.item} disableGutters key="Salir">
          <Button
            activeClassName={classes.active}
            className={classes.button}
            onClick={logOut}
          >
            <div className={classes.icon}>
              <ExitToAppIcon />
            </div>
            Salir
          </Button>
        </ListItem>
      </Hidden>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
};

export default SidebarNav;
