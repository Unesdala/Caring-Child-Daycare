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
import DefaultNews from './containers/News/News';
import DefaultCareers from './containers/Careers/Careers';
import DefaultContact from './containers/Contact/Contact';
import DefaultJobs from './containers/Jobs/Jobs';
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
              <Route path="/daycare/about/meet-the-teachers" component={DefaultTeachers} />
              <Route path="/daycare/about/faq" component={DefaultFAQ} />
              <Route path="/daycare/news" component={DefaultNews} />
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
