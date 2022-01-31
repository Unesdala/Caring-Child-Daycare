/* eslint-disable react/destructuring-assignment */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFourOhFour from './404';
import NavBar from 'src/components/Navigation/Navbar';
import DefaultHome from 'src/containers/Homepage/Homepage';
// About Submenu
import DefaultAbout from '../containers/About/About';
// import DefaultHistory from './containers/About/History/History';
// import DefaultDifference from './containers/About/Difference/Difference';
// import DefaultHigherStandards from './containers/About/HigherStandards/HigherStandards';
// import DefaultCurriculum from './containers/About/Curriculum/Curriculum';
// import DefaultTeachers from './containers/About/Teachers/Teachers';
// import DefaultFAQ from './containers/About/FAQ/FAQ';
// End About
// Programs Submenu
// import DefaultPrograms from './containers/Programs/Programs';
// import DefaultAfterSchool from './containers/Programs/AfterSchool/AfterSchool';
// import DefaultInfants from './containers/Programs/Infants/Infants';
// import DefaultPreK from './containers/Programs/PreK/PreK';
// import DefaultPreSchool from './containers/Programs/PreSchool/PreSchool';
// import DefaultSummerCamp from './containers/Programs/SummerCamp/SummerCamp';
// import DefaultTwos from './containers/Programs/Twos/Twos';
// End Programs
// import DefaultOurCenters from './containers/Centers/OurCenters';
// Parents Submenu
// import DefaultParents from './containers/Parents/Parents';
// import DefaultParentResources from './containers/Parents/ParentResources/ParentResources';
// import DefaultTestimonials from './containers/Parents/Testimonials/Testimonials';
// End Parents
// import DefaultNews from './containers/News/News';
// import DefaultCareers from './containers/Careers/Careers';
// import DefaultContact from './containers/Contact/Contact';
// import DefaultJobs from './containers/Jobs/Jobs';
import Footer from 'src/components/Footer';
import mapStoreToProps from 'src/redux/mapStoreToProps';

export class App extends PureComponent {

  render(): JSX.Element {
    return (
      <React.StrictMode>
        <div id="App" className="App Site">
          <Router>
            <NavBar />
              <Switch>
                <Route exact path="/" component={DefaultHome} />
                <Route path="/about/" component={DefaultAbout} />
                <Route component={AppFourOhFour} />
              </Switch>
            <Footer />
          </Router>
      </div>
      </React.StrictMode>
    );
  }
}

export default connect(mapStoreToProps, null)(App);
