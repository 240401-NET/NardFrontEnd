import React, { useState, useEffect } from "react";

function Leaderboard() {
  // State to store the leaderboard data
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Effect hook to fetch data from persistent Battle data cache
  useEffect(() => {
    // Fetch data from your persistent cache
    const fetchData = async () => {
      try {
        // Example: Fetch data from an API endpoint
        const response = await fetch("/LeaderboardData");
        const data = await response.json();
        // Update the data state with the fetched data
        setLeaderboardData(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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

      <ul>
        {/* Map over the data array and render leaderboard entries */}
        {leaderboardData.map((entry, index) => (
          <li key={index}>
            {entry.name}
            {entry.wins}
            {entry.losses}
            {entry.rank}
          </li> // Adjust to match your data structure
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
