import { PokemonContext } from "../Context/PokemonContext";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

function StartBattleMusicButton() {
  const {
    selectedPokemon,
    randomPokemon,
    selectedMoves,
    randomMoves,
    createdBattle,
    setCreatedBattle,
  } = useContext(PokemonContext);

  const playBattleMusic = () => {
    const audio = new Audio("http://localhost:5019/audio/BattleMusic-1.mp3");
    audio.play();
  };

  const handleBeginBattle = () => {
    console.log(selectedMoves ?? "dog");
    if (selectedMoves && randomMoves) {
      // Construct the URL for creating the battle
      const moves1string = selectedMoves.join(",");
      console.log(moves1string);
      const moves2string = randomMoves;
      const url = `http://localhost:5019/Battle/createBattle/${selectedPokemon}/${randomPokemon}/${moves1string}/${moves2string}`;
      console.log(url);

      fetch(url, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create battle");
          }
          return response.text();
        })
        .then((data) => {
          setCreatedBattle(data); // Store the created battle data
          console.log(data); // Handle any further actions with the created battle data
        })
        .catch((error) => {
          alert("Failed to create battle. Please try again later.", error);
        });
    } else {
      alert("Please select moves before starting the battle.");
    }
  };

  useEffect(() => {
    console.log(createdBattle);
  }, [createdBattle]);

  const startBattle = () => {
    // Start the battle music
    // playBattleMusic();
    handleBeginBattle();
    // Navigate to the BattlePage
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/battle">
        <button
          id="BBButton"
          type="button"
          onClick={startBattle}
          className="btn btn-primary"
        >
          BEGIN BATTLE
        </button>
      </Link>
      <p>Battle created {createdBattle}</p>
      {/*Display any other relevant information about the created battle*/}
    </div>
  );
}

export default StartBattleMusicButton;
