import CurriculumContent from './CurriculumContent';

export const Curriculum = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Curriculum';  
  return (
    <div className="Site-content">
      <main className="curriculum-main">
        <CurriculumContent />
      </main>
    </div>
  );
};

export default Curriculum;
