import React from "react";
import { Link } from "react-router-dom";

function ViewLeaderboardButton() {
  //Link to Leaderboard Component

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/Leaderboard" name="ViewLeaderboardButton">
        <button id="VLButt" className="btn btn-outline-danger">
          VIEW LEADERBOARD
        </button>
      </Link>
    </div>
  );
}
export default ViewLeaderboardButton;
