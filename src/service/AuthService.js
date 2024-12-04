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

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email: email });
    if (response.data.message) {
      Alert.success(response.data.message);
    } else {
      Alert.info("If the email is registered, you'll receive a reset link.");
    }
  } catch (error) {
    if (error.response) {
      Alert.error(error.response.data.message || "Failed to send reset email.");
    } else {
      Alert.error("Unable to process your request. Please try again later.");
    }
  }
};

export const resetPassword = async (newPassword) => {
  try {
    
    const response = await axios.post('https://your-api-endpoint.com/reset-password', {
      password: newPassword,
    });

    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error('Failed to reset password');
    }
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error; 
  }
};