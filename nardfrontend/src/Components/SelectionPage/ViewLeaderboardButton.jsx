import React from "react";
import { Link } from "react-router-dom";

function ViewLeaderboardButton() {
  //Link to Leaderboard Component

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/Leaderboard" className="button" name="ViewLeaderboardButton">
        VIEW LEADERBOARD
      </Link>
    </div>
  );
}
export default ViewLeaderboardButton;
