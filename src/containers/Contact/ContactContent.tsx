import { Link } from 'react-router-dom';

const ContactContent = (): JSX.Element => (
  <main className="contact-main--content">
    <p>
      If you&apos;d like to contact us, feel free to visit one of our
      <Link to="/centers"> local centers.</Link>
    </p>

    <p>For more general information, contact our central corporate office.</p>

    <h2>Corporate Office Address</h2>

    <p>
      1280 Placeholder Road
      <br />
      Vinton, VA 24179
    </p>

    <h3>Phone Number</h3>

    <a href="tel:540-555-5555">540-555-5555</a>

    <h3>Director</h3>

    <p>Rhayven Ayers</p>
    <a href="mailto:rhayven@codingforllamas.com">Email</a>

    <h3>Hours</h3>

    <ul>
      <li>Monday &ndash; Friday: 6:30am-6:30pm</li>
      <li>Saturday: Closed</li>
      <li>Sunday: Closed</li>
      <li>Holidays: Closed</li>
    </ul>

    <h2>General Inquiries and Enrollment</h2>

    <p>
      1157 Placeholder Ave
      <br />
      Vinton, VA 24179
    </p>

    <h3>Phone Number</h3>

    <a href="tel:540-555-5555">540-555-5555</a>

    <h2>Human Resources</h2>

    <p>
      1578 Placeholder Rd
      <br />
      Vinton, VA 24179
    </p>

    <h3>Phone Number</h3>

    <a href="tel:540-555-5555">540-555-5555</a>

    <p>You can also contact us using the form below.</p>
    {
    // Form Needed //
    }
    <p>Dev Note: Form Still Needed. Coming soon!</p>
  </main>
);

export default ContactContent;
