import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const WriteReview = () => {
  const { rideId } = useParams();
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleRatingChange = (ratingValue) => setRating(ratingValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rideId, description, rating });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem" }}>
      <h2>Write a Review for Ride {rideId}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="description" style={{ display: "block", marginBottom: "0.5rem" }}>
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows="5"
            placeholder="Write your review here..."
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Rating:</label>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <FaStar
                key={value}
                style={{
                  cursor: "pointer",
                  color: value <= rating ? "#FFD700" : "#ccc",
                }}
                onClick={() => handleRatingChange(value)}
              />
            ))}
          </div>
        </div>

        <div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
