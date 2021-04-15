import React, { Component } from "react";
import "./App.scss";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Attractions from "./Attractions";
import AttractionPage from "./AttractionPage";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="wrapApp">
          <Navigation />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/attractions" component={Attractions} />
            <Route path="/:path" component={AttractionPage} />

            {/* <Route path="/contact" component={Contact} />
              <Route component={ErrorPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
