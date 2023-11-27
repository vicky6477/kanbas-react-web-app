import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function Kanbas() {
    const [courses, setCourses] = useState([]);
   const URL = `${process.env.REACT_APP_API_BASE}/courses`;

    const [course, setCourse] = useState(null);
    const [newCourseName, setNewCourseName] = useState("");
    const [originalCourseId, setOriginalCourseId] = useState(null);

    const deleteCourse = async (course_id) => {
        console.log("Course to delete:", course);
        if (!course_id) {
            console.error("Error: the course to delete does not have an _id property.");
            return;
        }

        await axios.delete(`${URL}/${course_id}`);
        const filteredCourses = courses.filter((c) => c._id !== course_id);
        setCourses(filteredCourses);
    };

    const addNewCourse = async () => {
        const newCourse = {
            _id: "CS5001.19973.202309",
            name: newCourseName,
            startDate: "2023-09-10",
            endDate: "2023-12-15",
            image: "/images/sakura.JPG",
            icon: "BsPencilSquare",
            term: "Course Term",
        };

        const response = await axios.post(URL, newCourse);
        console.log("New course added:", response.data);
        setCourses([...courses, response.data]);
        setNewCourseName("");
    };

    const updateCourse = async () => {
        if (course) {
            try {
                await axios.put(`${URL}/${course._id}`, course);
                const updatedCourses = courses.map((c) => (c._id === course._id ? course : c));
                setCourses(updatedCourses);
                setCourse(null);
            } catch (error) {
                console.error("Error updating course:", error.response ? error.response.data : error.message);
            }
        }
    };

    const selectCourseForUpdate = (selectedCourse) => {
        setCourse(selectedCourse);
        setOriginalCourseId(selectedCourse._id);
    };

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    useEffect(() => {
        findAllCourses();
    }, []);

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
