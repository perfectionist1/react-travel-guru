import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Places from './components/PlaceDescription/Places';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]  = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        { loggedInUser.displayName && <p>Welcome! {loggedInUser.displayName}</p> }
        <Router>
          <Switch>
            <Route exact path="/">          
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/places/:placeId">
              <Places />
            </Route>
            <Route path="/booking/:bookingId">
              <Booking />
            </Route>
            <Route path="/create-account">
              <CreateAccount />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
