import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export const searchRide = async (startLat, startLng, endLat, endLng) => {
  try {
    const response = await axios.post(`${API_URL}/hopin/joincarpool`, {
      uid: sessionStorage.getItem("userId"),
      start_lat: startLat,
      start_long: startLng,
      end_lat: endLat,
      end_long: endLng,
    });

    if (response.data) {
      console.log("Ride search results:", response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.message || "Failed to search for a ride.");
    } else {
      console.error("Request error:", error.message);
      throw new Error("Unable to process your request. Please try again later.");
    }
  }
};

export const createRide = async (startLat, startLng, endLat, endLng, noOfSeats) => {
  try {
    const response = await axios.post(`${API_URL}/hopin/carpool`, {
      uid: sessionStorage.getItem("userId"),
      start_lat: startLat,
      start_long: startLng,
      end_lat: endLat,
      end_long: endLng,
      no_of_seats: noOfSeats
    });

    if (response.data) {
      console.log("Ride search results:", response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.message || "Failed to search for a ride.");
    } else {
      console.error("Request error:", error.message);
      throw new Error("Unable to process your request. Please try again later.");
    }
  }
};