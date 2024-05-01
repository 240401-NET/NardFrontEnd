import React, { useState } from "react";
// import React, { Link } from "react";

function StartBattleMusicButton() {
  // const [isBattleInProgress, setIsBattleInProgress] = useState(false);
  //run battle
  //start Battle Music

  // const BattleButton = ({ onStartBattle }) => {
  //   const handleBattleStart = () => {
  //     // Call the onStartBattle function passed from the parent component
  //     onStartBattle();
  //   };
  // };
  const playBattleMusic = () => {
    const audio = new Audio("http://localhost:5019/audio/BattleMusic-1.mp3");
    audio.play();
  };
  // Function to handle battle initiation

  // Function to handle battle initiation
  // const startBattle = () => {
  //   // Set battle in progress
  //   setIsBattleInProgress(true);
  // };

  // Function to handle music initiation
  const startMusic = () => {
    // Set battle in progress
    playBattleMusic();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <Link to="/BattlePage"> */}
      <button
        id="BBButton"
        type="button" // Specify type as "button"
        onClick={() => {
          // startBattle();
          startMusic();
        }} // Handle click event
        className="btn btn-primary"
      >
        BEGIN BATTLE
      </button>
      {/* </Link> */}
    </div>
  );
}
export default StartBattleMusicButton;
