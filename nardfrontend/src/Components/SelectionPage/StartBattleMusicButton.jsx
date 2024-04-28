import React, { useState } from "react";

function StartBattleMusicButton() {
  const [isBattleInProgress, setIsBattleInProgress] = useState(false);
  //run battle
  //start Battle Music

  // const BattleButton = ({ onStartBattle }) => {
  //   const handleBattleStart = () => {
  //     // Call the onStartBattle function passed from the parent component
  //     onStartBattle();
  //   };
  // };

  // Function to handle battle initiation
  const startBattle = () => {
    // Set battle in progress
    setIsBattleInProgress(true);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        id="BBButton"
        type="button" // Specify type as "button"
        onClick={startBattle} // Handle click event
        name="StartBattleMusicButton"
        className="btn btn-primary"
      >
        BEGIN BATTLE
      </button>
    </div>
  );
}
export default StartBattleMusicButton;
