import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography} from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  cargoStyle: {
    marginTop: "4px",
  },
}));

const Profile = (props) => {
  const { className, ...rest } = props;

  const [infoUser, setInfoUser] = useState({
    nombre: "",
    email: "",
    empresa: "",
  });

  const classes = useStyles();

  const history = useHistory();

  //const name = useSelector(state => state.user.user.datosUsuario.nombres);
  //const apellido = useSelector(state => state.user.user.datosUsuario.apellidos);
  //const cargo = useSelector(state => state.user.user.datosUsuario.empresa);

  useEffect(() => {
  }, [] );

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar alt="Person" className={classes.avatar} />
      <Typography className={classes.name} variant="h3">
        {infoUser.empresa}
      </Typography>
      <Typography className={classes.cargoStyle} variant="h6">
        {infoUser.nombre}
      </Typography>
      <Typography className={classes.cargoStyle} variant="h6">
        {infoUser.email}
      </Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
