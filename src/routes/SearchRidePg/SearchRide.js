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
        setRide(result);
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
          <p><strong>Carpool Owner:</strong> {ride.owner}</p>
          <p><strong>Commuters:</strong> {ride.commuters}</p>
          <p><strong>Number of Seats:</strong> {ride.noOfSeats}</p>
          <p><strong>Ride ID:</strong> {ride.rideId}</p>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Loading ride data...</p>
      )}
      <Message/>
    </div>
  );
};

export default SearchRide;
