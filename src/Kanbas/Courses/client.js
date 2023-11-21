import axios from "axios";

export const fetchCourses = async () => {
  // const promise = axios.get("http://localhost:4000/api/courses");
  // promise.then((response) => {
  //   setCourses(response.data);
  // });

  const response = await axios.get("http://localhost:4000/courses");
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(`http://localhost:4000/courses/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `http://localhost:4000/courses/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `http://localhost:4000/courses/${course._id}`,
    course
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    "http://localhost:4000/courses",
    course
  );
  return response.data;
};