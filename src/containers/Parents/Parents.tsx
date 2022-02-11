import ParentsContent from './ParentsContent';

export const Parents = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Parent\'s Corner';  
  return (
    <div className="Site-content">
      <main className="parents-corner-main">
        <ParentsContent />
      </main>
    </div>
  );
};

export default Parents;
