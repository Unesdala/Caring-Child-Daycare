import InfantsContent from './InfantsContent';

export const Infants = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Infants & Toddlers';  
  return (
    <div className="Site-content">
      <main className="infants-main">
        <InfantsContent />
      </main>
    </div>
  );
};

export default Infants;
