import FAQContent from './FAQContent';

export const FAQ = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Frequently Asked Questions';  
  return (
    <div className="Site-content">
      <main className="faq-main">
        <FAQContent />
      </main>
    </div>
  );
};

export default FAQ;
