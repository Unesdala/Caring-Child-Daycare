import { Link } from 'react-router-dom';

const CareerContent = (): JSX.Element => (
  <main className="careers">
    <p>
      We hire people that have a genuine love for young children and who have a
      commitment to educating young minds for a brighter future. If you&apos;re ready to start a rewarding career,
      {' '}
      <a href="mailto:admin@codingforllamas.com">send us your resume!</a>
    </p>
    <h2>Current Positions Available</h2>
    <ul>
      <li>Driver</li>
      <li>Cook</li>
      <li>Cook</li>
      <li>Lead Teacher</li>
      <li>Assistant Director</li>
    </ul>
    <p>
      To see a list of job descriptions,
      {' '}
      <Link to="/daycare/job-descriptions/">click here.</Link>
    </p>
  </main>
);

export default CareerContent;
