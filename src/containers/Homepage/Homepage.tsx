import HomeContent from './HomepageContent';

export const Homepage = (): JSX.Element => {
  document.title = 'Caring Child Daycare';  
  return (
    <div className="Site-content">
      <main className="home-main">
        <HomeContent />
      </main>
    </div>
  );
};

export default Homepage;
