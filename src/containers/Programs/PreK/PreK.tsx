import PreKContent from './PreKContent';

export const PreK = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Pre-K';  
  return (
    <div className="Site-content">
      <main className="pre-k-main">
        <PreKContent />
      </main>
    </div>
  );
};

export default PreK;
