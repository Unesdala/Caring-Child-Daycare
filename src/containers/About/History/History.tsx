import HistoryContent from './HistoryContent';

export const History = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Caring Child Daycare&apos;s History';  
  return (
    <div className="Site-content">
      <main className="history-main">
        <HistoryContent />
      </main>
    </div>
  );
};

export default History;
