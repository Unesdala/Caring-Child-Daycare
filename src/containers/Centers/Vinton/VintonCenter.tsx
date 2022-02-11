import VintonCenterContent from './VintonCenterContent';

export const VintonCenter = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Vinton Center';  
  return (
    <div className="Site-content">
      <main className="vinton-main">
        <VintonCenterContent />
      </main>
    </div>
  );
};

export default VintonCenter;
