import AfterSchoolContent from './AfterSchoolContent';

export const AfterSchool = (): JSX.Element => {
  document.title = 'Caring Child Daycare | After School';  
  return (
    <div className="Site-content">
      <main className="after-school-main">
        <AfterSchoolContent />
      </main>
    </div>
  );
};

export default AfterSchool;
