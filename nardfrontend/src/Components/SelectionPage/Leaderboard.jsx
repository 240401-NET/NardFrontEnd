import React, { useState, useEffect } from "react";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5019/Leaderboard/getLeaderboards"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        setError("Error fetching leaderboard data. Please try again later.");
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table
          className="table table-striped text-light bg-danger bg-opacity-75"
          id="tabletime"
        >
          <thead>
            <tr>
              <th>Pokemon Name</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.wins}</td>
                <td>{data.losses}</td>
                <td>{data.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;
