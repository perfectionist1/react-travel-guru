import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Home from './components/Home/Home';
import News from './components/News/News';
import NoMatch from './components/NoMatch/NoMatch';
import Places from './components/PlaceDescription/Places';


function App() {
  return (
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

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
