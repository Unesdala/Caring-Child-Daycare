/* eslint-disable react/destructuring-assignment */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollToTop from 'src/components/Navigation/ScrollToTop';
import NavBar from 'src/components/Navigation/Navbar';
import AppFourOhFour from './404';
import Privacy from './Privacy';
import DefaultHome from 'src/containers/Homepage/Homepage';
// About Submenu
import DefaultAbout from 'src/containers/About/About';
import DefaultHistory from 'src/containers/About/History/History';
import DefaultCurriculum from 'src/containers/About/Curriculum/Curriculum';
import DefaultFAQ from 'src/containers/About/FAQ/FAQ';
// End About
// Programs Submenu
import DefaultAfterSchool from 'src/containers/Programs/AfterSchool/AfterSchool';
import DefaultInfants from 'src/containers/Programs/Infants/Infants';
import DefaultPreK from 'src/containers/Programs/PreK/PreK';
import DefaultPreSchool from 'src/containers/Programs/PreSchool/PreSchool';
import DefaultSummerCamp from 'src/containers/Programs/SummerCamp/SummerCamp';
import DefaultTwos from 'src/containers/Programs/Twos/Twos';
// End Programs
// Locations Submenu
import DefaultVintonCenter from 'src/containers/Centers/Vinton/VintonCenter';
import DefaultFourSixtyCenter from 'src/containers/Centers/460/460Center';
import DefaultParkwayCenter from 'src/containers/Centers/Parkway/ParkwayCenter';
// End Locations
// Parents Submenu
import DefaultParents from 'src/containers/Parents/Parents';
import DefaultParentResources from 'src/containers/Parents/ParentResources/ParentResources';
import DefaultTestimonials from 'src/containers/Parents/Testimonials/Testimonials';
// End Parents
import DefaultCareers from 'src/containers/Careers/Careers';
import DefaultJobs from 'src/containers/Careers/Jobs/Jobs';
import DefaultContact from 'src/containers/Contact/Contact';
import Footer from 'src/components/Footer';
import mapStoreToProps from 'src/redux/mapStoreToProps';

export class App extends PureComponent {

  render(): JSX.Element {
    return (
      <React.StrictMode>
        <div id="App" className="App Site">
          <Router>
            <ScrollToTop />
            <NavBar />
              <Switch>
                <Route exact path="/daycare/" component={DefaultHome} />
                {/*About Submenu*/}
                <Route exact path="/daycare/about/" component={DefaultAbout} />
                <Route exact path="/daycare/about/caring-child-history" component={DefaultHistory} />
                <Route exact path="/daycare/about/curriculum" component={DefaultCurriculum} />
                <Route exact path="/daycare/about/faq" component={DefaultFAQ} />
                {/*Programs Submenu*/}
                <Route exact path="/daycare/programs/infants-and-toddlers" component={DefaultInfants} />
                <Route exact path="/daycare/programs/twos" component={DefaultTwos} />
                <Route exact path="/daycare/programs/preschool" component={DefaultPreSchool} />
                <Route exact path="/daycare/programs/private-pre-k" component={DefaultPreK} />
                <Route exact path="/daycare/programs/after-school" component={DefaultAfterSchool} />
                <Route exact path="/daycare/programs/summer-camp" component={DefaultSummerCamp} />
                {/*Locations Submenu*/}
                <Route exact path="/daycare/locations/vinton-center" component={DefaultVintonCenter} />
                <Route exact path="/daycare/locations/460-center" component={DefaultFourSixtyCenter} />
                <Route exact path="/daycare/locations/parkway-center" component={DefaultParkwayCenter} />
                {/*Parents Submenu*/}
                <Route exact path="/daycare/parents/parents-corner" component={DefaultParents} />
                <Route exact path="/daycare/parents/parents-resources" component={DefaultParentResources} />
                <Route exact path="/daycare/parents/testimonials" component={DefaultTestimonials} />
                {/*Careers Submenu*/}
                <Route exact path="/daycare/careers/" component={DefaultCareers} />
                <Route exact path="/daycare/careers/job-descriptions" component={DefaultJobs} />
                <Route exact path="/daycare/contact" component={DefaultContact} />
                <Route exact path="/daycare/privacy" component={Privacy} />
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
