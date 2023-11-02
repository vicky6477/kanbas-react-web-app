import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState(null);
    const [newCourseName, setNewCourseName] = useState("");
    const [originalCourseId, setOriginalCourseId] = useState(null);

    const addNewCourse = () => {
        const newCourse = {
            name: newCourseName,
            _id: `NewID.${new Date().getTime()}`,
            startDate: "2023-09-10",
            endDate: "2023-12-15",
            image: "/images/sakura.JPG",
            icon: "BsPencilSquare",
            term: "Course Term",
        };
        setCourses((prevCourses) => [...prevCourses, newCourse]);
        setNewCourseName("");
    };

    const updateCourse = () => {
        if (course) {
            const updatedCourses = courses.map((c) => (c._id === originalCourseId ? { ...course } : c));
            setCourses(updatedCourses);
            setCourse(null);
            setOriginalCourseId(null);
        }
    };

    const deleteCourse = (courseId) => {
        setCourses((prevCourses) => prevCourses.filter((course) => course._id !== courseId));
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route
                            path="Dashboard"
                            element={
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    newCourseName={newCourseName}
                                    setNewCourseName={setNewCourseName}
                                    setOriginalCourseId={setOriginalCourseId}
                                />
                            }
                        />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;
