import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchRide } from "../../service/RideService";

const SearchRide = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [rideResults, setRideResults] = useState(null);
  const [error, setError] = useState(null);

  const startLat = queryParams.get("startLat");
  const startLng = queryParams.get("startLng");
  const endLat = queryParams.get("endLat");
  const endLng = queryParams.get("endLng");
  useEffect(()=>{
    const fetchRideData = async () => {
        try {
          const results = await searchRide(startLat, startLng, endLat, endLng);
          setRideResults(results);
        } catch (err) {
          setError(err.message);
        }
      };
  
      if (startLat && startLng && endLat && endLng) {
        fetchRideData();
      }
    }, [startLat, startLng, endLat, endLng]);

  return (
    <div>
      <h1>Search Ride</h1>
      <p>Start Location: {startLat}, {startLng}</p>
      <p>End Location: {endLat}, {endLng}</p>
    </div>
  );
};

export default SearchRide;
