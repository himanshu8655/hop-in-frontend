import React from "react";
import RideHistoryCard from "../../components/RideHistoryCard";
import { useNavigate } from "react-router-dom";

const RideHistory = () => {

  const navigate = useNavigate();

  const handleReview = (rideId) => {
    
    navigate(`/write-review/${rideId}`)
  };

  const rideHistoryList = [
    {
      ride_id: "3",
      carpool_owner_id: "OWNER456",
      status: "Completed",
      total_seats: 4,
      start_location: "City A",
      end_location: "City B",
      commuter_id: ["COMMUTER789", "COMMUTER101"],
      message_id: "MSG202",
    },
    {
      ride_id: "2",
      carpool_owner_id: "OWNER457",
      status: "Cancelled",
      total_seats: 3,
      start_location: "City C",
      end_location: "City D",
      commuter_id: ["COMMUTER102", "COMMUTER103"],
      message_id: "MSG203",
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Ride History</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {rideHistoryList.map((ride, index) => (
          <RideHistoryCard
            key={index}
            ride_id={ride.ride_id}
            carpool_owner_id={ride.carpool_owner_id}
            status={ride.status}
            total_seats={ride.total_seats}
            start_location={ride.start_location}
            end_location={ride.end_location}
            commuter_id={ride.commuter_id}
            message_id={ride.message_id}
            onWriteReview={handleReview}
          />
        ))}
      </div>
    </div>
  );
};

export default RideHistory;
