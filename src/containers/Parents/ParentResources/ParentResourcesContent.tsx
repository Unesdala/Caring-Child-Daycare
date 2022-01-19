import CreateResourceLinks from './ParentResourceLinks';

const ParentResourcesContent = (): JSX.Element => (
  <main className="parent-resources">

    <h1>Bringing you resources to make life easier.</h1>

    <p>
      Caring Child Daycare offers a range of resources in a convenient location to save parents time and hassle.
      As always, feel free to contact your local center for more information.
    </p>

    <CreateResourceLinks />

  </main>
);

export default ParentResourcesContent;
