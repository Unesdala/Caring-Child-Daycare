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
import DefaultAbout from 'src/containers/About/About';
import DefaultHistory from 'src/containers/About/History/History';
import DefaultCurriculum from 'src/containers/About/Curriculum/Curriculum';
// import DefaultFAQ from 'src/containers/About/FAQ/FAQ';
// End About
// Programs Submenu
// import DefaultPrograms from 'src/containers/Programs/Programs';
// import DefaultAfterSchool from 'src/containers/Programs/AfterSchool/AfterSchool';
// import DefaultInfants from 'src/containers/Programs/Infants/Infants';
// import DefaultPreK from 'src/containers/Programs/PreK/PreK';
// import DefaultPreSchool from 'src/containers/Programs/PreSchool/PreSchool';
// import DefaultSummerCamp from 'src/containers/Programs/SummerCamp/SummerCamp';
// import DefaultTwos from 'src/containers/Programs/Twos/Twos';
// End Programs
// import DefaultOurCenters from 'src/containers/Centers/OurCenters';
// Parents Submenu
// import DefaultParents from 'src/containers/Parents/Parents';
// import DefaultParentResources from 'src/containers/Parents/ParentResources/ParentResources';
// import DefaultTestimonials from 'src/containers/Parents/Testimonials/Testimonials';
// End Parents
// import DefaultNews from 'src/containers/News/News';
// import DefaultCareers from 'src/containers/Careers/Careers';
// import DefaultContact from 'src/containers/Contact/Contact';
// import DefaultJobs from 'src/containers/Jobs/Jobs';
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
                <Route exact path="/about/" component={DefaultAbout} />
                <Route exact path="/about/caring-child-history" component={DefaultHistory} />
                <Route exact path="/about/curriculum" component={DefaultCurriculum} />
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
