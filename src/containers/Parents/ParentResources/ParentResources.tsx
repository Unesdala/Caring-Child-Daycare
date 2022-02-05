import DefaultParentResourcesContent from './ParentResourcesContent';

export const ParentResources = (): JSX.Element => {
  document.title = 'Caring Child Daycare | Vinton Center';  
  return (
    <div className="Site-content">
      <main className="parents-resources-main">
        <DefaultParentResourcesContent />
      </main>
    </div>
  );
};

export default ParentResources;
