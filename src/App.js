import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />

        <Movies />
      </main>
    );
  }
}

export default App;
