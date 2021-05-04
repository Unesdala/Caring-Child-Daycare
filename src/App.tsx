/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import superagent from 'superagent';
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
// Programs Submenu
import DefaultPrograms from './containers/Programs/Programs';
import DefaultAfterSchool from './containers/Programs/AfterSchool/AfterSchool';
import DefaultInfants from './containers/Programs/Infants/Infants';
import DefaultPreK from './containers/Programs/PreK/PreK';
import DefaultPreSchool from './containers/Programs/PreSchool/PreSchool';
import DefaultSummerCamp from './containers/Programs/SummerCamp/SummerCamp';
import DefaultTwos from './containers/Programs/Twos/Twos';
// End Programs
// Parents Submenu
import DefaultParents from './containers/Parents/Parents';
import DefaultParentResources from './containers/Parents/ParentResources/ParentResources';
// End Parents
import DefaultTestimonials from './containers/Parents/Testimonials/Testimonials';
import DefaultNews from './containers/News/News';
import DefaultCareers from './containers/Careers/Careers';
import DefaultContact from './containers/Contact/Contact';
import DefaultJobs from './containers/Jobs/Jobs';
import FourOhFour from './containers/404';
import mapStoreToProps from './redux/mapStoreToProps';
import fetch from './lib/fetch';
import { AppProps } from './AppTypes';

export class App extends Component<AppProps> {
  fetch: typeof fetch;

  superagent: superagent.SuperAgentStatic;

  static defaultProps = {
    dispatch: /* istanbul ignore next */(): void => { },
  };

  constructor(props: AppProps) {
    super(props);
    this.fetch = fetch;
    this.state = {};
    this.superagent = superagent;
  }

  /*
    ToDo:
    Make fetch for parent resources
  */

  componentDidMount(): void { // fetch the images
    this.fetch.fetchGet(this, 'images/', 'GOT_IMAGES');
  }

  render(): JSX.Element {
    return (
      <div id="App" className="App Site">
        <Router>
          <Navbar />
          <div className="siteContent">
            <Switch>
              <Route exact path="/daycare" component={AppTemplate} />
              <Route exact path="/daycare/centers" component={DefaultOurCenters} />
              <Route exact path="/daycare/about" component={DefaultAbout} />
              <Route path="/daycare/about/caring-child-history" component={DefaultHistory} />
              <Route path="/daycare/about/caring-child-difference" component={DefaultDifference} />
              <Route path="/daycare/about/meeting-higher-standards" component={DefaultHigherStandards} />
              <Route path="/daycare/about/curriculum" component={DefaultCurriculum} />
              <Route path="/daycare/about/meet-the-teachers" component={DefaultTeachers} />
              <Route path="/daycare/about/faq" component={DefaultFAQ} />
              <Route exact path="/daycare/programs" component={DefaultPrograms} />
              <Route exact path="/daycare/programs/after-school" component={DefaultAfterSchool} />
              <Route exact path="/daycare/programs/infants-and-toddlers" component={DefaultInfants} />
              <Route exact path="/daycare/programs/private-pre-k" component={DefaultPreK} />
              <Route exact path="/daycare/programs/preschool" component={DefaultPreSchool} />
              <Route exact path="/daycare/programs/summer-camp" component={DefaultSummerCamp} />
              <Route exact path="/daycare/programs/twos" component={DefaultTwos} />
              <Route exact path="/daycare/parents" component={DefaultParents} />
              <Route exact path="/daycare/parents/resources" component={DefaultParentResources} />
              <Route exact path="/daycare/parents/testimonials" component={DefaultTestimonials} />
              <Route exact path="/daycare/news" component={DefaultNews} />
              <Route exact path="/daycare/careers" component={DefaultCareers} />
              <Route exact path="/daycare/job-descriptions" component={DefaultJobs} />
              <Route exact path="/daycare/contact" component={DefaultContact} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default connect(mapStoreToProps, null)(App);
