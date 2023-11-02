import React from "react";
import { useParams, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars } from "react-icons/fa";
import "./index.css";

function Courses({ courses }) {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, id, screen] = pathname.split("/");
    const course = courses.find((course) => course._id === courseId);


    return (
        <div className="main-content">
            <nav className="breadcrumb-section" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <FaBars className="wd-icon-bar" />
                    <Link to={pathname} className="course-link">
                        {course._name}
                    </Link>
                    <span className="separator">&gt;</span>
                    <hr />
                    {screen}
                </ol>
            </nav>

            <CourseNavigation />

            <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{
                    left: "320px",
                    top: "50px",
                    bottom: "0",
                }}
            >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    );
}

export default Courses;
