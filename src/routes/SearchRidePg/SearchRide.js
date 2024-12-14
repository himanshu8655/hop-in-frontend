import React, { useEffect, useState } from "react";
import { fetchActiveRide } from "../../service/RideService";
import Message from "../MessagePg/Message";

const SearchRide = () => {
  const [ride, setRide] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRideData = async () => {
      try {
        const result = await fetchActiveRide();
        if (result.success) {
          setRide(result.data); // Update state with the actual data
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
    <div style={{ backgroundColor: "#282c34", color: "#f1f1f1", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Ride Details</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}
      {ride ? (
        <div style={{ fontSize: "1.2rem", marginTop: "20px", textAlign: "center" }}>
          <p><strong>Carpool Owner ID:</strong> {ride.carpool_owner}</p>
          <p><strong>Start Location:</strong> Lat: {ride.start_location.coordinates[1]}, Long: {ride.start_location.coordinates[0]}</p>
          <p><strong>End Location:</strong> Lat: {ride.end_location.coordinates[1]}, Long: {ride.end_location.coordinates[0]}</p>
          <p><strong>Start Time:</strong> {new Date(ride.start_time).toLocaleString()}</p>
          <p><strong>Seats Available:</strong> {ride.seat_available}</p>
          <p><strong>Ride ID:</strong> {ride.ride_id}</p>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Loading ride data...</p>
      )}
      <Message />
    </div>
  );
};

export default SearchRide;
