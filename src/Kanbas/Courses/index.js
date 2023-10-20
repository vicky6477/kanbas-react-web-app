import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
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

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);

    return (
        <div className="main-content">
            <nav class="breadcrumb-section" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <FaBars className="wd-icon-bar" />
                    <a href={pathname} className="course-link">
                        {course._id}
                    </a>
                    <span className="separator">&gt;</span>
                    <hr/>
                    {screen}
                </ol>
            </nav>

            <CourseNavigation />

            <div
                className="overflow-y-scroll position-absolute bottom-0 end-0"
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
