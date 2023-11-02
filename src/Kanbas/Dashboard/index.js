import React, { useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, newCourseName, setNewCourseName, setOriginalCourseId }) {


    return (
        <div className="main-content">
            <h1>Dashboard</h1>
            {course ? (
                <>
                    <input
                        value={course.name}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <input
                        value={course._id}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, _id: e.target.value })}
                    />
                    <input
                        value={course.term}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, term: e.target.value })}
                        
                    />
                    <input
                        value={course.startDate}
                        className="form-control"
                        type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                    />
                    <input
                        value={course.endDate}
                        className="form-control"
                        type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                    />
                    <button className="btn btn-primary mt-2 mr-2" onClick={updateCourse}>
                        Update
                    </button>
                </>
            ) : (
                <>
                    {" "}
                    <div className="input-group mb-3">
                        <input
                            placeholder="Enter new course name"
                            className="form-control short-input"
                            value={newCourseName}
                            onChange={(e) => setNewCourseName(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary mr-2" onClick={addNewCourse}>
                                Add
                            </button>
                            <button className="btn btn-secondary" onClick={updateCourse}>
                                Update
                            </button>
                        </div>
                    </div>
                </>
            )}
            <hr />
            <div className="published-course-section">
                <h2>Published Courses ({courses.length})</h2>
                <hr />
            </div>
            <div className="courses-container">
                {courses.map((courseItem) => (
                    <div className="card h-100" key={courseItem._id}>
                        <img src={courseItem.image} className="card-img-top" alt="Course Image" />
                        <div className="card-body">
                            <Link to={`/Kanbas/Courses/${courseItem._id}`} className="card-title h5">
                                {courseItem.name}
                            </Link>
                            <Link to={`/Kanbas/Courses/${courseItem._id}`} className="list-group-item">
                                {courseItem._id}
                            </Link>
                            <div className="card-text">{courseItem.term}</div>
                            <div className="card-text">{courseItem.startDate} to {courseItem.endDate}</div>
                           
                           
                            <button className="btn btn-info mr-2" onClick={() => {setOriginalCourseId(courseItem._id); setCourse({ ...courseItem })}}>
                                Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => deleteCourse(courseItem._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;