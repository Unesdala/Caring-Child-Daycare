import TestimonialsContent from './TestimonialsContent';

export const Testimonials = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Testimonials';  
  return (
    <div className="Site-content">
      <main className="testimonials-main">
        <TestimonialsContent />
      </main>
    </div>
  );
};

export default Testimonials;
