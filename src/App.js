import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import AppTemplate from './components/App-Main';
import DefaultOurCenters from './containers/Centers/OurCenters';
// About Submenu
import DefaultAbout from './containers/About/About';
import DefaultHistory from './containers/About/History/History';
import DefaultDifference from './containers/About/Difference/Difference';
import DefaultHigherStandards from './containers/About/HigherStandards/HigherStandards';
import DefaultCurriculum from './containers/About/Curriculum/Curriculum';
import DefaultTeachers from './containers/About/Teachers/Teachers';
import DefaultFAQ from './containers/About/FAQ/FAQ';
// End About
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
              <Route path="/daycare/about/caring-child-history" component={DefaultHistory} />
              <Route path="/daycare/about/caring-child-difference" component={DefaultDifference} />
              <Route path="/daycare/about/meeting-higher-standards" component={DefaultHigherStandards} />
              <Route path="/daycare/about/curriculum" component={DefaultCurriculum} />
              <Route path="/daycare/about/teachers" component={DefaultTeachers} />
              <Route path="/daycare/about/faq" component={DefaultFAQ} />
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
