import { useParams } from "react-router-dom";
import db from "../../Database";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";

// function ButtonSection() {
//     const elements = [
//         { type: "button", label: "Collapse All", btnClass: "btn-secondary" },
//         { type: "button", label: "View Progress", btnClass: "btn-secondary" },
//         {
//             type: "select",
//             options: [
//                 { value: "Publish All", label: "Publish All" },
//                 { value: "Publish all items and modules", label: "Publish all items and modules" },
//                 { value: "Unpublish", label: "Unpublish" },
//             ],
//         },
//         { type: "button", label: "+ Module", btnClass: "btn-danger" },
//     ];

//     return (
//         <div className="button-section">
//             <ul className="list-group list-group-horizontal float-end">
//                 {elements.map((element, index) => (
//                     <li key={index} className="list-group-item p-0 me-2">
//                         {element.type === "button" && (
//                             <a href="#" className={`btn ${element.btnClass}`}>
//                                 {element.label}
//                             </a>
//                         )}
//                         {element.type === "select" && (
//                             <select className="form-select">
//                                 {element.options.map((option, oIndex) => (
//                                     <option key={oIndex} value={option.value}>
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </select>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const [editingModule, setEditingModule] = useState(null);
    const [originalModuleId, setOriginalModuleId] = useState(null);


    return (
        <div>
            {/* <ButtonSection /> */}
            <div className="clearfix"></div>
            <hr />
            <ul className="list-group mb-3">
                <li className="list-group-item">
                    <div className="mb-3">
                        <input
                            value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            className="form-control"
                            placeholder="Module name"
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <textarea
                            value={module.description}
                            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                            className="form-control"
                            placeholder="Description"
                            style={{ flex: 1, marginRight: "10px" }}
                        />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <input
                            value={module._id}
                            onChange={(e) => dispatch(setModule({ ...module, _id: e.target.value }))}
                            className="form-control mt-2"
                            placeholder="Course Number"
                        />

                        <div>
                            <button
                                onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                                className="btn btn-primary me-2"
                            >
                                Add
                            </button>

                            <button
                                onClick={() => {
                                    dispatch(updateModule({ ...module, originalId: originalModuleId }));
                                    setEditingModule(null);
                                    setOriginalModuleId(null);
                                }}
                                className="btn btn-secondary"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </li>

                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item mb-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h3>{module.name}</h3>
                                    <p>{module.description}</p>
                                    <p>{module._id}</p>
                                </div>
                                <div>
                                    <button onClick={() => dispatch(deleteModule(module._id))} className="btn btn-warning">
                                        Delete
                                    </button>

                                    <button
                                        onClick={() => {
                                            dispatch(setModule(module));
                                            setEditingModule(module);
                                            setOriginalModuleId(module._id);
                                        }}
                                        className="btn btn-danger me-2"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                            {module.lessons && (
                                <ul className="list-group mt-2">
                                    {module.lessons.map((lesson, index) => (
                                        <li key={index} className="list-group-item">
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
