/* eslint-disable react/destructuring-assignment */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFourOhFour from './404';
import NavBar from 'src/components/Navigation/Navbar';
import DefaultHome from 'src/containers/Homepage/Homepage';
import Footer from 'src/components/Footer';
import mapStoreToProps from 'src/redux/mapStoreToProps';

export class App extends PureComponent {

  render(): JSX.Element {
    return (
      <React.StrictMode>
        <div id="App" className="App Site">
        <Router>
          <NavBar />
          <>
            <Switch>
              <Route exact path="/" component={DefaultHome} />
              <Route component={AppFourOhFour} />
            </Switch>
          </>
          <Footer />
        </Router>
      </div>
      </React.StrictMode>
    );
  }
}

export default connect(mapStoreToProps, null)(App);
