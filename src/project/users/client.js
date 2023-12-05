import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:3000";
export const USERS_API = `${BASE_API}/users`;

export const signin = async (credentials) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const account = async () => {
  const response = await axios.post(`${USERS_API}/account`);
  return response.data;
};

