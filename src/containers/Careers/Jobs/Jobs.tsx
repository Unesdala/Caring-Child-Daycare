import JobsContent from './JobsContent';

export const Jobs = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Now Hiring';  
  return (
    <div className="Site-content">
      <main className="jobs-main">
        <JobsContent />
      </main>
    </div>
  );
};

export default Jobs;
