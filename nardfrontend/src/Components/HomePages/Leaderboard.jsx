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
    console.log(leaderboardData);

    fetchLeaderboardData();
  }, []);
  console.log(leaderboardData);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {error ? (
        <p>Error: {error}</p> //HEY LISTEN!!!!!
      ) : (
        <table
          className="table table-striped text-light bg-danger bg-opacity-75"
          id="tabletime"
        >
          <thead>
            <tr>
              <th>Pokemon Name</th>
              <th>Rank</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((data) => (
              <tr key={data.id}>
                <td>{data.pokemonName}</td>
                <td>{data.rank}</td>
                <td>{data.win}</td>
                <td>{data.loss}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;
