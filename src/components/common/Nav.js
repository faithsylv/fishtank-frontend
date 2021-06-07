import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../pages/home';
import LoginForm from '../registrations/LoginForm';
import SignupForm from '../registrations/SignupForm';

class Nav extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/signup">
              <SignupForm />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default Nav;
