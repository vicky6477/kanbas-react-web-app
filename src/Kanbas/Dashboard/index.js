import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import { BsPencilSquare } from "react-icons/bs";

function Dashboard() {
    const courses = db.courses;

    return (
        <div className="main-content">
            <h1>Dashboard</h1>
            <hr />
            <div className="published-course-section">
                <h2>Published Courses ({courses.length})</h2>
                <hr />
            </div>

            <div className="courses-container ">
                {courses.map((course, index) => (
                    <div className="card h-100" key={course._id}>
                        <img src={course.image} className="card-img-top" alt="Course Image" />
                        <div className="card-body">
                            <Link to={`/Kanbas/Courses/${course._id}`} className="card-title h5">
                                {course.name}
                            </Link>
                            <Link to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                {course._id}
                            </Link>

                            <p className="card-text">
                                {course.term}
                            </p>
                            <div className="card-icon">
                                <a href="#">{course.icon === "BsPencilSquare" && <BsPencilSquare />}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;
