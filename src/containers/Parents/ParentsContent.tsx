import { Link } from 'react-router-dom';

const ParentsContent = (): JSX.Element => (
  <main className="parents-corner-main--content">

    <h1>Your link to our resources.</h1>

    <p>
      At Caring Child, we know parenting can be stressful. That&apos;s why we offer a range of resources to make
      getting through the day a little bit easier.
      Whether it be links to forms and papers that you&apos;ll need to register for our facilities, or general Virginia schools, the menu
      for your child&apos;s upcoming meals at our centers, or plans for emergencies, we hope to ease the stress of daily life even just a little bit.
    </p>

    <p>At Caring Child, both you and your child are in good hands.</p>

    <p>
      Feel free to browse our
      {' '}
      <Link to="/parents/resources">parent resources</Link>
      {' '}
      or take a look at what other parents
      {' '}
      <Link to="/parents/testimonials">have said</Link>
      {' '}
      about Caring Child Daycare.
    </p>

  </main>
);

export default ParentsContent;
