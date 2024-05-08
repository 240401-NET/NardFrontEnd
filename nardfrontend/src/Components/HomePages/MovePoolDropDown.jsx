import React, { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import { BattleContext } from "../Context/BattleContext";
import StartBattleMusicButton from "./StartBattleMusicButton";
// import PokemonVid from "../../Assets/PokemonVid.mp4";

function MovePoolDropDown({ selectedPokemon, pokemonList, onSelectMoves }) {
  const { selectedMoves, setSelectedMoves, open, setOpen, randomMoves } =
    useContext(PokemonContext);
  const { battleInfo, updatedBattleData, setUpdatedBattleData } =
    useContext(BattleContext);
  const [confirmButtonText, setConfirmButtonText] =
    useState("Confirm Selection");
  const [confirmed, setConfirmed] = useState(false);

  // const videoRef2 = useRef(null);

  useEffect(() => {
    setSelectedMoves([]);
    setConfirmed(false);
  }, [selectedPokemon]);

  const handleMoveSelect = async (move) => {
    if (!selectedMoves.includes(move)) {
      if (selectedMoves.length < 4) {
        setSelectedMoves([...selectedMoves, move]);
      } else {
        alert("You can select only 4 moves.");
      }
    } else if (confirmed) {
      alert("Moves can not be changed after confirmation.");
    } else {
      alert("Move already selected.");
    }
  };

  const randomOpponentMove = () => {
    // Check if randomMoves array has at least one move
    console.log(randomMoves ?? "dog");
    const splittedRandomMoves = randomMoves.split(",");
    if (splittedRandomMoves.length > 0) {
      // Get a random index within the range of randomMoves array
      let randomIndex = Math.floor(Math.random() * splittedRandomMoves.length);
      // Return the move at the randomly selected index
      return splittedRandomMoves[randomIndex];
    } else {
      // If randomMoves array is empty, return null or handle the scenario as needed
      return null; // or handle the scenario appropriately
    }
  };

  const handleClick = () => {
    setOpen(!open); // Toggle the state of 'open'
  };

  const removeMove = (move) => {
    setSelectedMoves(
      selectedMoves.filter((selectedMove) => selectedMove !== move)
    );
  };

  const handleConfirm = () => {
    if (selectedMoves.length !== 4) {
      alert("Please select exactly 4 moves before confirming.");
    } else {
      onSelectMoves(selectedMoves);
      setConfirmed(true);
      setOpen(false); // Close the dropdown after confirming moves
      setConfirmButtonText("Confirmed!");
    }
  };

  const updateBattle = async (battleId, pokemon1Move, pokemon2Move) => {
    const url = `http://localhost:5019/Battle/updateBattle/${battleId}/${pokemon1Move}/${pokemon2Move}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
      });

      const data = await response.json();
      setUpdatedBattleData(data);
      console.log(battleInfo);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const updateLeaderboardEntryOnBattleEnd = async (
    battleId,
    pokemonId,
    winLossPoint
  ) => {
    const url = `http://localhost:5019/Leaderboard/${pokemonId}/entry`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({ winLossPoint }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div
        className="dropdown"
        style={{ position: "relative", maxHeight: "200px" }}
      >
        <button onClick={handleClick} id="MovePoolDrop">
          {open ? "Close Menu" : "Select Moves"}
        </button>
        <div>
          {!confirmed && (
            <button id="ConfirmMovesButton" onClick={handleConfirm}>
              {confirmButtonText}
            </button>
          )}
        </div>
        {open && (
          <ul
            className="menu"
            style={{
              position: "absolute",
              top: "-200%",
              right: "100%",
              maxHeight: "560px",
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            {(
              pokemonList.find((pokemon) => pokemon.name === selectedPokemon)
                ?.movePool || []
            )
              // this can be cleaned up
              .map((move, index) => (
                <li className="menu-item" key={index}>
                  <button
                    onClick={() => handleMoveSelect(move)}
                    disabled={confirmed}
                  >
                    {move}
                  </button>
                </li>
              ))}
          </ul>
        )}
        <div>
          <h2>Selected Moves:</h2>
          <ol className="flex">
            {selectedMoves.map((move, index) => (
              <li key={index}>
                <button
                  id="RemoveButt"
                  onClick={() => removeMove(move)}
                  disabled={confirmed}
                >
                  Remove
                </button>{" "}
                <button
                  id="moves-container"
                  onClick={() =>
                    updateBattle(
                      battleInfo.battleId,
                      selectedMoves[index],
                      randomOpponentMove()
                    )
                  }
                >
                  {" "}
                  {move}
                </button>
              </li>
            ))}
          </ol>
        </div>

        {confirmed && (
          <div>
            <StartBattleMusicButton />
          </div>
        )}
      </div>
    </>
  );
}

export default MovePoolDropDown;
