import ParkwayCenterContent from './ParkwayCenterContent';

export const ParkwayCenter = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Parkway Center';  
  return (
    <div className="Site-content">
      <main className="parkway-main">
        <ParkwayCenterContent />
      </main>
    </div>
  );
};

export default ParkwayCenter;
