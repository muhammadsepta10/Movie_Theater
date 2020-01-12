import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Film from "./screens/FilmDetaile";
import Movie from "./screens/Movie";
import Home from "./screens/Home";
import Cinema from "./screens/Cinema";
import Studio from "./screens/Studio";
import Seat from "./screens/Seat";
import Schedule from "./screens/Schedule";
import Payment from "./screens/Payment";
import Ticket from "./screens/BuyTicket";
import MyPayment from "./screens/MyPayment";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/movie_detaile/:id/:id2" component={Film} />
          <Route path="/movie" component={Movie} />
          <Route path="/cinema" component={Cinema} />
          <Route path="/studio" component={Studio} />
          <Route path="/seat/:id" component={Seat} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/payment" component={Payment} />
          <Route path="/buy/:id" component={Ticket} />
          <Route path="/my_payment" component={MyPayment} />
        </Router>
      </div>
    );
  }
}
