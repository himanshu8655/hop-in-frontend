import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const signup = async (username, password, name) => {
  const response = await axios.post(`${API_URL}/signup`, {
    username,
    password,
    name,
  });
  if (!response.data.token || !response.data.userId) {
    throw new Error("Login Failed");
  }
  sessionStorage.setItem("token", response.data.token);
  sessionStorage.setItem("userId", response.data.userId.toString());
};
