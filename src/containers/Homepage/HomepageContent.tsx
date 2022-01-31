const HomeContent = (): JSX.Element => (
  <>
    <section className="home-main--introduction">
      <h1>Your child&apos;s future never looked so <span className="bright">bright.</span></h1>
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
          <div className="program-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="program-grid--info-box"><h1>Infants</h1></div>
        </div>
        <div className="program-grid--twos">
          <div className="program-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="program-grid--info-box"><h1>Twos</h1></div>
        </div>
        <div className="program-grid--preschool">
          <div className="program-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="program-grid--info-box"><h1>PreSchool</h1></div>
        </div>
        <div className="program-grid--private-pre-k">
          <div className="program-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="program-grid--info-box"><h1>Pre-K</h1></div>
        </div>
        <div className="program-grid--after-school">
          <div className="program-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="program-grid--info-box"><h1>After School</h1></div>
        </div>
        <div className="program-grid--summer-camp">
          <div className="program-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="program-grid--info-box"><h1>Summer Camp</h1></div>
        </div>
      </div>
    </section>
    <section className="home-main--reviews">
      <h1>Review Title</h1>
      <figure>
        <blockquote>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veniam et facilis at ad quo beatae 
            quae blanditiis sed ut eius cupiditate quasi, vel consequuntur praesentium corrupti reiciendis laborum eveniet.
          </p>
        </blockquote>
        <figcaption>
          - Some Family
        </figcaption>
      </figure>
      <br />
      <button className="review-button">Read More Reviews</button>
    </section>
  </>
);

export default HomeContent;
