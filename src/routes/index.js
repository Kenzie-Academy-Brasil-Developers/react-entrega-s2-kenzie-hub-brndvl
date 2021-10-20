import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { useState } from "react";
import { useEffect } from "react";

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("@KenzieHub:token");

    if(token){
      setAuthenticated(true)
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated}/>
      </Route>

      <Route path="/signup">
        <Signup authenticated={authenticated}/>
      </Route>

      <Route path="/login">
        <Login
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
      </Route>

      <Route path="/dashboard">
        <Dashboard authenticated={authenticated}/>
      </Route>
    </Switch>
  );
};
