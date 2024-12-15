import React, { useEffect, useState } from "react";
import { fetchActiveRide, updateRideStatus } from "../../service/RideService";
import Message from "../MessagePg/Message";

const SearchRide = () => {
  const [ride, setRide] = useState(null);
  const [error, setError] = useState(null);
  const userID = sessionStorage.getItem("userId");
  const [rideStatus, setRideStatus] = useState(0);
  const [btnValue, setBtnValue] = useState("");
  
  const handleRideStatus = async () => {
    let updated_status = "";

    if(rideStatus == 0){
      updated_status = "1";
    }
    else if(rideStatus == 1){
      updated_status = "2";
    }
    else{
      return;
    }
    await updateRideStatus(updated_status, ride.ride_id)
      .then((data) => {
        setRideStatus(updated_status);
        setBtnValue(getStatus(updated_status))
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  };

  const getStatus = (status) => {
    if (status == 0) {
      return "Start Ride";
    }
    if (status == 1) {
      return "End Ride";
    }
    if (status == 2) {
      return "Ride Ended";
    }
  };

  useEffect(() => {
    const fetchRideData = async () => {
      try {
        const result = await fetchActiveRide();
        if (result.success && result.data) {
          setRide(result.data);
          setRideStatus(result.data.is_active);
          setBtnValue(getStatus(result.data.is_active));
        } else if (result.success && result.data === null) {
          setError("No active rides available.");
        } else {
          setError("Failed to fetch ride details.");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRideData();
  }, []);

  return (
    <div
      style={{ backgroundColor: "#282c34", color: "#f1f1f1", padding: "20px" }}
    >
      <h1 style={{ textAlign: "center" }}>Ride Details</h1>
      {ride ? (
        <div
          style={{ fontSize: "1.2rem", marginTop: "20px", textAlign: "center" }}
        >
          <p>
            <strong>Carpool Owner ID:</strong> {ride.carpool_owner}
          </p>
          <p>
            <strong>Start Location:</strong> Lat:{" "}
            {ride.start_location.coordinates[1]}, Long:{" "}
            {ride.start_location.coordinates[0]}
          </p>
          <p>
            <strong>End Location:</strong> Lat:{" "}
            {ride.end_location.coordinates[1]}, Long:{" "}
            {ride.end_location.coordinates[0]}
          </p>
          <p>
            <strong>Start Time:</strong>{" "}
            {new Date(ride.start_time).toLocaleString()}
          </p>
          <p>
            <strong>Seats Available:</strong> {ride.seat_available}
          </p>
          <p>
            <strong>Ride ID:</strong> {ride.ride_id}
          </p>
          {ride.carpool_owner == userID ? (
            <button onClick={handleRideStatus}>{btnValue}</button>
          ) : null}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No active rides available.</p>
      )}
      <Message />
    </div>
  );
};

export default SearchRide;
