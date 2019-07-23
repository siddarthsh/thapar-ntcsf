import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Sidebar from "./components/sidebar/Index";
import MobileMenu from "./components/mobilemenu/Index";
import Index from "./components/pages/index/Index";
import Registration from "./components/pages/registration/Index";
import Accomodation from "./components/pages/accomodation/Index";
import TalkSchedule from "./components/pages/talkschedule/Index";
import Error from "./components/pages/Error";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Admin from "./components/pages/admin/Index";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render(){
    return ( 
    <Provider store={store}> 
        <Router>
          <div className="App">
            <Sidebar />
            <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/accomodation" component={Accomodation} />
            <Route exact path="/schedule" component={TalkSchedule} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={Admin} />
            <Route path="*" component={Error}/>
            </Switch>
            <MobileMenu />
          </div>
        </Router>
    </Provider>
    );
  }
}
export default App;
