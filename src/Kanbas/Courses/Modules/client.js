import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-4cpn.onrender.com/courses";
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;

export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(`${API_BASE}/courses/${courseId}/modules`, module);
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${API_BASE}/courses/${courseId}/modules`);
  return response.data;
};
