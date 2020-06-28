import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Registrarse from "./pages/Registrarse/Registrarse";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/registrarse" component={Registrarse} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
