import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
      <div className="d-flex justify-content-between mb-4">
        <div>
          <h3>Student Names</h3>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Students" />
          
          </div>
        </div>
        <div>
          <h3>Assignment Names</h3>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Assignments" />
            <div className="input-group-append">
          </div>
        </div>
      </div><div className="container mt-4">
          <div className="d-flex align-items-center mb-4">
            <h1 className="flex-grow-1">Grades</h1>
            <button className="btn btn-primary">Import</button>
            <button className="btn btn-secondary ml-2">Export</button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
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
                          (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                        );
                        return <td key={assignment._id}>{grade?.grade || "-"}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div></div>
    );
}

export default Grades;
