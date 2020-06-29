import React from "react";
import Main from "../../layout/Main";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    background: "#f4f6f8",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: 'flex'
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Main>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} variant="outlined">
              <Skeleton variant="circle" width="70px" height="70px" style={{ marginRight : 20 }} />
              <Skeleton variant="rect" width="100%" height={70} />
            </Paper>
          </Grid>
          
        </Grid>
      </div>
    </Main>
  );
};

export default Dashboard;
