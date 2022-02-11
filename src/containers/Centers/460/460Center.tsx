import FourSixtyCenterContent from './460CenterContent';

export const FourSixtyCenter = (): JSX.Element => {
  document.title = 'Caring Child Daycare | 460 Center';  
  return (
    <div className="Site-content">
      <main className="460-main">
        <FourSixtyCenterContent />
      </main>
    </div>
  );
};

export default FourSixtyCenter;
