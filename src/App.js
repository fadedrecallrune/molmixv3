import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";
import { Home } from "./home/Home";
import { AboutUs } from "./aboutus/AboutUs";
import Shipping from './shipping/Shipping'

import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import Servis from "./servis/Servis";
import Montag from "./montag/Montag";
import Sravnenie from "./sravnenie/Sravnenie";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/shipping' component={Shipping} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/servis' component={Servis} />
          <Route exact path='/montag' component={Montag} />
          <Route exact path='/sravnenie' component={Sravnenie} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
