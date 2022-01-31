import AboutContent from './AboutContent';

export const About = (): JSX.Element => {
  document.title = 'Caring Child Daycare | About Caring Child Daycare';  
  return (
    <div className="Site-content">
      <main className="about-main">
        <AboutContent />
      </main>
    </div>
  );
};

export default About;
