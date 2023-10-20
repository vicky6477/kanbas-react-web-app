import ModuleList from "../Modules/ModuleList";

function Home() {
  const courseLinks = [
    "Import Existing Content",
    "Import From Commons",
    "Import Existing Content",
    "View Course Stream",
    "New Announcement",
    "New Analytics",
    "View Course Notifications"
  ];

  const comingUpLinks = [
    { label: "Grade A1 - ENV + HTML", date: "100 points Sep 18 at 11:59pm" },
    { label: "Grade A2 CSS + Bootstrap", date: "100 points Otc 2 atc 11:59pm" },
    { label: "Grade A3 - JS + JSON", date: "100 points Oct 18 at 11:59pm" },
  ];

  return (
    <div className="row">
        <div className="col-10">
            <ModuleList />
        </div>
        <div className="col-2">
            <div className="course-status-section">
                <h2>Course Status</h2>
                <ul className="list-group">
                  {courseLinks.map((link, index) => (
                    <li key={index} className="list-group-item">
                      <button className="btn btn-secondary" type="button" style={{whiteSpace: "nowrap",border: "none"}}>{link}</button>
                    </li>
                  ))}
                </ul>
                <h2>To do</h2>
                <hr/>
                <ul className="list-group">
                  {comingUpLinks.map((item, index) => (
                    <li key={index} className="list-group-item"  style={{border: "none", padding: 0}}>
                      <a href="#" style={{color: "#B62828", textDecoration: "none"}}>{item.label}</a>
                      <div style={{marginTop: "5px", fontSize: "0.8em", color: "grey"}}>{item.date}</div>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Home;
