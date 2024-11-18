import axios from "axios";
import { Alert } from "../components/Alert";
const API_URL = process.env.REACT_APP_API_URL;

export const signup = async (username, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      password,
      name,
    });

    if (!response.data.token || !response.data.userId) {
      throw new Error("Sign-up failed: Missing token or user ID");
    }

    sessionStorage.setItem("token", response.data.token);
    sessionStorage.setItem("userId", response.data.userId.toString());
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Sign-up failed");
    } else {
      throw new Error("Unable to complete sign-up. Please try again later.");
    }
  }
};


export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    if (!response.data.token || !response.data.userId) {
      throw new Error("Login failed: Missing token or user ID");
    }

    sessionStorage.setItem("token", response.data.token);
    sessionStorage.setItem("userId", response.data.userId.toString());
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    } else {
      throw new Error("Unable to complete login. Please try again later.");
    }
  }
};

export const logout = (navigate) => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  navigate('/login');
  Alert.success("Logout Successfully!")
};