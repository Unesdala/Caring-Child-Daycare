import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import AppTemplate from './components/App-Main';
import DefaultOurCenters from './containers/Centers/OurCenters';
import DefaultAbout from './containers/About/About';
import DefaultAboutCaringChild from './containers/About/AboutCaringChild/AboutCaringChild';
import DefaultCareers from './containers/Careers/Careers';
import DefaultJobs from './containers/Jobs/Jobs';
import DefaultContact from './containers/Contact/Contact';
import FourOhFour from './containers/404';

export class App extends PureComponent {
  render() {
    return (
      <div id="App" className="App Site">
        <Router>
          <Navbar />
          <div className="siteContent">
            <Switch>
              <Route exact path="/daycare" component={AppTemplate} />
              <Route path="/daycare/centers" component={DefaultOurCenters} />
              <Route exact path="/daycare/about" component={DefaultAbout} />
              <Route path="daycare/about/about-caring-child" component={DefaultAboutCaringChild} />
              <Route path="/daycare/careers" component={DefaultCareers} />
              <Route path="/daycare/job-descriptions" component={DefaultJobs} />
              <Route path="/daycare/contact" component={DefaultContact} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
