import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { BsPencilSquare, BsCheck } from "react-icons/bs";

function SearchSection() {
    const elements = [
        { type: "button", label: "+Group", btnClass: "btn-secondary" },
        { type: "button", label: "+ Assignment", btnClass: "btn-danger" },
        <input placeholder="Search for Assignment" />,
    ];

    return (
        <div className="Search-section">
            <ul className="list-group list-group-horizontal float-end">
                <input placeholder="Search for Assignment" />
                {elements.map((element, index) => (
                    <li key={index} className="list-group-item  p-0 me-2">
                        {element.type === "button" && (
                           <button className={`btn ${element.btnClass}`}>
                                {element.label}
                            </button>
                        )}
                        {element.type === "select" && (
                            <select className="form-select">
                                {element.options.map((option, oIndex) => (
                                    <option key={oIndex} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Assignments() {
    const { courseId } = useParams();

    const assignments = db.assignments;
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);

    return (
        <div>
            <div className="list-group">
                <SearchSection />

                <div className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                    <h2>ASSIGNMENTS</h2>
                    <button className="btn btn-secondary float-end">
                        +40% of Total
                    </button>
                </div>
                {courseAssignments.map((assignment) => (
                    <div
                        key={assignment._id}
                        className="list-group-item list-group-item-action"
                    >
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-start">
                                <HiOutlineEllipsisVertical />
                                <HiOutlineEllipsisVertical />
                                <Link 
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    style={{ marginRight: "10px" }}
                                >
                                    <BsPencilSquare />
                                </Link>
                            </div>
                            <div>
                                <span>{assignment._id} - {assignment.title}</span>
                                <div>
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Modules`}
                                        style={{ textDecoration: "none", color: "#b62828" }}
                                    >
                                        Multiple Modules
                                    </Link>{" "}
                                    | {assignment.dueDate} | {assignment.points} pts
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                            <BsCheck style={{ marginLeft: "10px", color: "green" }} />
                            <HiOutlineEllipsisVertical />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;