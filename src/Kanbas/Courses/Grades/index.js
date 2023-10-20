import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Grades</h1>
            <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (
                                <th key={assignment._id}>{assignment.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment._id}>
                                    <td>
                                        {user.firstName} {user.lastName}
                                    </td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) =>
                                                grade.student === enrollment.user && grade.assignment === assignment._id
                                        );
                                        return <td key={assignment._id}>{grade?.grade || ""}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;