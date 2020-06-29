import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";
import Main from "../../layout/Main";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Main>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          console.log(`event : ${event}`);
          console.log(`newValue : ${newValue}`);
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Main>
  );
};

export default Dashboard;
