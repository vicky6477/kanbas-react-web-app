import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ButtonSection() {
    const elements = [
        { type: "button", label: "Collapse All", btnClass: "btn-secondary" },
        { type: "button", label: "View Progress", btnClass: "btn-secondary" },
        { 
            type: "select", 
            options: [
                { value: "Publish All", label: "Publish All" },
                { value: "Publish all items and modules", label: "Publish all items and modules" },
                { value: "Unpublish", label: "Unpublish" }
            ] 
        },
        { type: "button", label: "+ Module", btnClass: "btn-danger" }
    ];

    return (
        <div className="button-section">
            <ul className="list-group list-group-horizontal float-end">
                {elements.map((element, index) => (
                    <li key={index} className="list-group-item p-0 me-2">
                        {element.type === "button" && (
                            <a href="#" className={`btn ${element.btnClass}`}>
                                {element.label}
                            </a>
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

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div className="module-container">
            <ButtonSection />
            <ul className="list-group">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item list-group-item-action ">
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                            {module.lessons && (
                                <ul className="list-group">
                                    {module.lessons.map((lesson, index) => (
                                        <li key={index} className="list-group-item list-group-item-action ">
                                            <h4>{lesson.name}</h4>
                                            <p>{lesson.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default ModuleList;
