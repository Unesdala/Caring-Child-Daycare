import ContactContent from './ContactContent';

export const Contact = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Contact Us';  
  return (
    <div className="Site-content">
      <main className="contact-main">
        <ContactContent />
      </main>
    </div>
  );
};

export default Contact;
