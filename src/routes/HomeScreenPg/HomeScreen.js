import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import "./HomeScreen.css";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  position: "relative",
};
const MAPS_API = process.env.REACT_APP_MAPS_API;

const HomeScreen = () => {
  const [start, setStart] = useState({ lat: null, lng: null });
  const [end, setEnd] = useState({ lat: null, lng: null });
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const navigate = useNavigate();

  const handlePlaceSelected = (place, type) => {
    if (!place || !place.geometry) {
      console.warn("Invalid place or geometry missing");
      return;
    }

    const location = place.geometry.location;
    const coordinates = { lat: location.lat(), lng: location.lng() };

    if (type === "start") {
      setStart(coordinates);
    } else if (type === "end") {
      setEnd(coordinates);
    }

    setMapCenter(coordinates);
  };

  const handleSearchRide = () => {
    if (start.lat && end.lat) {
      navigate(`/search-ride?startLat=${start.lat}&startLng=${start.lng}&endLat=${end.lat}&endLng=${end.lng}`);
    } else {
      alert("Please select both start and end locations.");
    }
  };

  return (
    <LoadScript googleMapsApiKey={MAPS_API} libraries={["places"]}>
      <div style={{ position: "relative" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={13}
        >
          {start.lat && <Marker position={start} />}
          {end.lat && <Marker position={end} />}
        </GoogleMap>

        <div className="form-container">
          <Autocomplete
            onPlaceChanged={() =>
              handlePlaceSelected(window.autocompleteStart.getPlace(), "start")
            }
            onLoad={(autocomplete) => (window.autocompleteStart = autocomplete)}
          >
            <input
              type="text"
              placeholder="Enter Start Location"
              className="input-field"
            />
          </Autocomplete>

          <Autocomplete
            onPlaceChanged={() =>
              handlePlaceSelected(window.autocompleteEnd.getPlace(), "end")
            }
            onLoad={(autocomplete) => (window.autocompleteEnd = autocomplete)}
          >
            <input
              type="text"
              placeholder="Enter End Location"
              className="input-field"
            />
          </Autocomplete>

          <button className="search-button" onClick={handleSearchRide}>
            Search for Ride
          </button>
        </div>
      </div>
    </LoadScript>
  );
};

export default HomeScreen;
