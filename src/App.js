import React, { Component } from "react";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rental} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="Movies" />
            <Redirect to="NotFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
