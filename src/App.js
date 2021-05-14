import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import MovieList from "./component/MovieList";
import NoLogin from "./component/NoLogin";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/Movie" component={MovieList} />
          <Route path="/NoLogin" component={NoLogin} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
