import CareersContent from './CareersContent';

export const Careers = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Careers';  
  return (
    <div className="Site-content">
      <main className="vinton-main">
        <CareersContent />
      </main>
    </div>
  );
};

export default Careers;
