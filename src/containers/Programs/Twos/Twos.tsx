import TwosContent from './TwosContent';

export const Twos = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Twos';  
  return (
    <div className="Site-content">
      <main className="twos-main">
        <TwosContent />
      </main>
    </div>
  );
};

export default Twos;
