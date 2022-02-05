import { EnrollmentForms, ParentResources, DaycareDocuments } from './ResourceLinks';

const CreateResourceLinks = (): JSX.Element => (
  <div className="parent-resources">
    <h2>Enrollment Forms</h2>
    <ul>
      {EnrollmentForms.map((EF) => (
        <li className="resource-link" key={EF.name}>
          <a href={EF.url} target="blank" rel="noopener noreferrer">{EF.name}</a>
        </li>
      ))}
    </ul>

    <h2>Parent Resources</h2>
    <ul>
      {ParentResources.map((PR) => (
        <li className="resource-link" key={PR.name}>
          <a href={PR.url} target="blank" rel="noopener noreferrer">{PR.name}</a>
        </li>
      ))}
    </ul>

    <h2>Daycare Documents</h2>
    <ul>
      {DaycareDocuments.map((DD) => (
        <li className="resource-link" key={DD.name}>
          <a href={DD.url} target="blank" rel="noopener noreferrer">{DD.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default CreateResourceLinks;
