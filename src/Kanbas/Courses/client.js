import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;


// export const fetchCourses = async () => {
//   const response = await axios.get(COURSES_URL);
//   return response.data;
// };
export const fetchCourses = async () => {
  const url = `${process.env.REACT_APP_API_BASE}/courses`;
  console.log("Requesting URL:", url);  // 打印完整的请求URL
  const response = await axios.get(url);
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(`${COURSES_URL}/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(`${COURSES_URL}/${id}`);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(COURSES_URL, course);
  return response.data;
};
