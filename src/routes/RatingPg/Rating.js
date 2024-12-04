import RatingCard from "../../components/RatingCard";

const Rating = () => {
    const ratingData = [
        {
          rfc_id: "1",
          rfc_description: "Great ride, smooth experience!",
          ride_id: "101",
          user_id: "user_001",
          date: "2024-12-01",
          rating: 5,
        },
        {
          rfc_id: "2",
          rfc_description: "Driver was late, please improve punctuality.",
          ride_id: "102",
          user_id: "user_002",
          date: "2024-12-02",
          rating: 3,
        },
        {
          rfc_id: "3",
          rfc_description: "No complaints, happy with the service.",
          ride_id: "103",
          user_id: "user_003",
          date: "2024-12-03",
          rating: 4,
        },
      ];
    return (
        <div>
  <h1 style={{ textAlign: "center" }}>Ratings, Feedback, & Complaints</h1>
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {ratingData.map((data) => (
              <RatingCard key={data.rfc_id} {...data} />
            ))}
          </div>
        </div>
      )
};

export default Rating;
