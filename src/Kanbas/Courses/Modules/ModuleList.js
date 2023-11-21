import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId).then((modules) => dispatch(setModules(modules)));
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        try {
            await client.updateModule(module); 
            dispatch(updateModule({ ...module, originalId: originalModuleId })); // Updates local state
        } catch (error) {
            console.error("Error updating module:", error);
        }
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const [editingModule, setEditingModule] = useState(null);
    const [originalModuleId, setOriginalModuleId] = useState(null);

    return (
        <div>
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
                            <button onClick={handleAddModule} className="btn btn-primary me-2">
                                Add
                            </button>

                            <button onClick={handleUpdateModule} className="btn btn-secondary">
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
                                    <button onClick={() => handleDeleteModule(module._id)} className="btn btn-warning">
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