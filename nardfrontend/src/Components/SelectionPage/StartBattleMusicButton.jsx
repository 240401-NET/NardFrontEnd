import { PokemonContext } from "../Context/PokemonContext";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

function StartBattleMusicButton() {
  const { selectedPokemon, randomPokemon, selectedMoves, randomMoves } =
    useContext(PokemonContext);

  const playBattleMusic = () => {
    const audio = new Audio("http://localhost:5019/audio/BattleMusic-1.mp3");
    audio.play();
  };
  const [createdBattle, setCreatedBattle] = useState(null);

  const handleBeginBattle = () => {
    console.log(selectedMoves ?? "dog");
    if (selectedMoves && randomMoves) {
      // Construct the URL for creating the battle
      const moves1string = selectedMoves.join(",");
      console.log(moves1string);
      const moves2string = randomMoves;
      const url = `http://localhost:5019/Battle/createBattle/${selectedPokemon}/${randomPokemon.id}/${moves1string}/${moves2string}`;
      console.log(url);

      fetch(url, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create battle");
          }
          return response.json();
        })
        .then((data) => {
          setCreatedBattle(data); // Store the created battle data
          // Handle any further actions with the created battle data
        })
        .catch((error) => {
          alert("Failed to create battle. Please try again later.");
          alert("Errorbattle:", error);
        });
    } else {
      alert("Please select moves before starting the battle.");
    }
  };

  const startBattle = () => {
    // Start the battle music
    // playBattleMusic();
    handleBeginBattle();
    // Navigate to the BattlePage
  };
  console.log(createdBattle);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/battle">
        <button
          id="BBButton"
          type="button"
          onClick={startBattle}
          className="btn btn-primary, pulse"
        >
          BEGIN BATTLE
        </button>
      </Link>
      {createdBattle && (
        <p>Battle created with ID: {createdBattle.battleId}</p>
        // Display any other relevant information about the created battle
      )}
    </div>
  );
}

export default StartBattleMusicButton;
