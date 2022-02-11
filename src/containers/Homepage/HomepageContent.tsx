import { Link } from 'react-router-dom';

const HomeContent = (): JSX.Element => (
  <>
    <section className="home-main--introduction">
      <h1>Your child&apos;s future never looked so <span className="secondary-text">bright.</span></h1>
      <br />
      <p>
        Welcome to Caring Child Daycare &ndash; A learning center dedicated to the future of you child&apos;s well being.
        Caring Child Daycare is a leader in education-based childcare in the Greater Roanoke Valley.
      </p>
      <p>
        At Caring Child Daycare, we are committed to bringing out the best in your children &ndash; 
        feeding their curiosity and drive to learn to prepare them for the future through age-appropriate activities 
        designed to make every experience a learning experience.
      </p>
      <p>
        There&apos;s never a dull moment at Caring Child!
      </p>
    </section>
    <section className="home-main--programs">
      <div className="program-grid">
        <div className="program-grid--infants">
          <div className="program-grid--picture">
            <Link to="/daycare/programs/infants-and-toddlers">
              <img src="https://dl.dropboxusercontent.com/s/qeez674x0zc8k1t/ccd_infants.jpg?dl=0" alt="6 weeks to 23 months" />
            </Link>
          </div>
          <div className="program-grid--info-box"><h1>Infants</h1></div>
        </div>
        <div className="program-grid--twos">
          <div className="program-grid--picture">
            <Link to="/daycare/programs/twos">
              <img src="https://dl.dropboxusercontent.com/s/iqqv1xmdied4acg/ccd_twos.png?dl=0" alt="Twos - 24 to 36 months" />
            </Link>
          </div>
          <div className="program-grid--info-box"><h1>Twos</h1></div>
        </div>
        <div className="program-grid--preschool">
          <div className="program-grid--picture">
            <Link to="/daycare/programs/preschool">
              <img src="https://dl.dropboxusercontent.com/s/815i0sgjr1gp5l6/ccd_preschool.jpg?dl=0" alt="PreShool - 3 year olds" />
            </Link>
          </div>
          <div className="program-grid--info-box"><h1>PreSchool</h1></div>
        </div>
        <div className="program-grid--private-pre-k">
          <div className="program-grid--picture">
            <Link to="/daycare/programs/private-pre-k">
              <img src="https://dl.dropboxusercontent.com/s/gpuua8mvmxhehxb/ccd_prek.jpg?dl=0" alt="Private Pre-K - 4 year olds" />
            </Link>
          </div>
          <div className="program-grid--info-box"><h1>Pre-K</h1></div>
        </div>
        <div className="program-grid--after-school">
          <div className="program-grid--picture">
            <Link to="/daycare/programs/after-school">
              <img src="https://dl.dropboxusercontent.com/s/4s0rccix9qvr7c1/ccd_after-school.jpg?dl=0" 
              alt="After School Program - 5 to 12 year olds" />
            </Link>
          </div>
          <div className="program-grid--info-box"><h1>After School</h1></div>
        </div>
        <div className="program-grid--summer-camp">
          <div className="program-grid--picture">
            <Link to="/daycare/programs/summer-camp">
              <img src="https://dl.dropboxusercontent.com/s/am817y3wqfh44lo/ccd_summer-camp.jpg?dl=0" alt="Summer Camp - 6 to 12 year olds" />
            </Link>
          </div>
          <div className="program-grid--info-box"><h1>Summer Camp</h1></div>
        </div>
      </div>
    </section>
    <section className="home-main--reviews">
      <h1>"Caring Child Really Cares!"</h1>
      <figure>
        <blockquote>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veniam et facilis at ad quo beatae 
            quae blanditiis sed ut eius cupiditate quasi, vel consequuntur praesentium corrupti reiciendis laborum eveniet.
          </p>
        </blockquote>
        <figcaption>
          &ndash; Mx. Wolfe
        </figcaption>
      </figure>
      <br />
      <Link to="/daycare/parents/testimonials" className="btn btn--white review-button">Read More Reviews</Link>
    </section>
  </>
);

export default HomeContent;
