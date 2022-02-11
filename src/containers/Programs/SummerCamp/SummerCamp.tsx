import SummerCampContent from './SummerCampContent';

export const SummerCamp = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Summer Camp';  
  return (
    <div className="Site-content">
      <main className="summer-camp-main">
        <SummerCampContent />
      </main>
    </div>
  );
};

export default SummerCamp;
