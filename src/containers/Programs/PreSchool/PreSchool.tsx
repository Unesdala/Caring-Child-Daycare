import PreSchoolContent from './PreSchoolContent';

export const PreSchool = (): JSX.Element => {
  document.title = 'Caring Child Daycare | PreSchool';  
  return (
    <div className="Site-content">
      <main className="pre-school-main">
        <PreSchoolContent />
      </main>
    </div>
  );
};

export default PreSchool;
