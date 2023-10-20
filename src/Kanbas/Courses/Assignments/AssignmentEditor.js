import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";

function Select({ label, options, ...rest }) {
    return (
        <div className="mb-2">
            {label && <span>{label}</span>}
            <select className="form-control" {...rest}>
                {options.map((option, idx) => (
                    <option key={idx} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

function Checkbox({ label, ...rest }) {
    return (
        <div className="mb-2">
            <label>
                <input type="checkbox" {...rest} /> {label}
            </label>
        </div>
    );
}

function TextInput({ label, ...rest }) {
    return (
        <div className="mb-2">
            {label && <span>{label}</span>}
            <input className="form-control" {...rest} />
        </div>
    );
}

function TextArea({ label, ...rest }) {
    return (
        <div className="mb-2">
            {label && <span>{label}</span>}
            <textarea className="form-control" {...rest}></textarea>
        </div>
    );
}

function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
    const navigate = useNavigate();

    const handleSave = () => {
    
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Select label="" options={[
                        { label: 'Speed Grader', value: 'button' },
      
                    ]} id="select-one-genre" />

                    <hr className="mb-2"/>

                    <TextInput label="Assignment Name" id="assignmentName" defaultValue={`${assignment._id} - ${assignment.title}`} />

                    <TextArea label="Description" cols="20" rows="2" defaultValue="This is the assignment description." />

                    <TextInput label="Points" type="number" defaultValue="100" max="100" min="50" step="5"/>

                    <Select label="Assignment Group" options={[{ label: 'Assignments', value: 'Assignments' }]} />
                    <Select label="Display Grade as" options={[{ label: 'Percentage', value: 'Percentage' }]} />
                    <Select label="Submission Type" options={[{ label: 'Online', value: 'Online' }]} />

                    <span>Online Entry Options</span>
                    <Checkbox label="Text Entry" />
                    <Checkbox label="Website URL" />
                    <Checkbox label="Media Recordings" />
                    <Checkbox label="Student Annotation" />
                    <Checkbox label="File Uploads" />

                    <Select label="Submission Attempts" options={[{ label: 'Unlimited', value: 'Unlimited' }]} />
                    <Select label="Plagiarism Reviews" options={[{ label: 'None', value: 'None' }]} />
                    <Checkbox label="This is a group assignment" />
                    <Checkbox label="Require Peer Reviews" />
                    <TextInput label="Assign to" defaultValue="Everyone" />
                    <TextInput label="Due" type="date" defaultValue="2021-01-01" min="2021-01-01" max="2021-09-23" />
                    <TextInput label="Available from" type="date" defaultValue="2021-01-01" min="2021-01-01" max="2021-09-23" />
                    <TextInput label="Until" type="date" defaultValue="2021-01-01" min="2021-01-01" max="2021-09-23"/>

                    <div className="d-flex justify-content-between mt-3">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-success">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssignmentEditor;
