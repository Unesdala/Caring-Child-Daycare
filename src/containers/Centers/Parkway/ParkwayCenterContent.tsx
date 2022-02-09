const ParkwayCenterContent = (): JSX.Element => (
  <main className="parkway-main--content">
    <section className="parkway-main--introduction">
    <div className="introduction-grid">
        <div className="location-features">
          <h1>
            Location Features
          </h1>
          <ol className="centers-list">
            <li>Secure Entrances</li>
            <li>Spacious rooms filled with colourful patterns to stimulate learning</li>
            <li>Music rooms for kids to explore their creative talents</li>
            <li>Modern design with skylight for natural lighting and a view of the sky</li>
            <li>Food menus designed by our in-house chefs, designed to meet USDA guidelines</li>
            <li>Close to the local park</li>
            <li>Off site Field Trips</li>
            <li>Free parking for drop off and pick up</li>
          </ol>
        </div>
        <div className="location-directions">

        </div>
      </div>
    </section>
    <section className="parkway-main--staff">
      <h1 className="staff-header">Meet Our Parkway Director Team</h1>
      <div className="staff-grid">
        <div className="staff-grid--director">
          <div className="staff-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="staff-grid--name"><h1>Dale Dimadome</h1></div>
          <div className="staff-grid--title"><h1>Director</h1></div>
          <div className="staff-grid--description"><h1>Descritpion</h1></div>
        </div>
        <div className="staff-grid--assistant-director">
          <div className="staff-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="staff-grid--name"><h1>Name</h1></div>
          <div className="staff-grid--title"><h1>Assistant Director</h1></div>
          <div className="staff-grid--description"><h1>Descritpion</h1></div>
        </div>
        <div className="staff-grid--third-in-charge">
          <div className="staff-grid--picture"><h1>Insert Picture Here</h1></div>
          <div className="staff-grid--name"><h1>Name</h1></div>
          <div className="staff-grid--title"><h1>Third in Charge</h1></div>
          <div className="staff-grid--description"><h1>Descritpion</h1></div>
        </div>
      </div>
    </section>
  </main>
);

export default ParkwayCenterContent;
