import React, { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import StartBattleMusicButton from "./StartBattleMusicButton";

function MovePoolDropDown({
  selectedPokemon,
  pokemonList,
  onSelectMoves,
  randomMoves,
}) {
  const { selectedMoves, setSelectedMoves, open, setOpen } =
    useContext(PokemonContext);
  const [confirmButtonText, setConfirmButtonText] =
    useState("Confirm Selection");
  const [confirmed, setConfirmed] = useState(false);

  // Reset selected moves when a new Pokemon is chosen
  useEffect(() => {
    setSelectedMoves([]);
    setConfirmed(false);
  }, [selectedPokemon]);

  const handleMoveSelect = (move) => {
    if (!selectedMoves.includes(move)) {
      if (selectedMoves.length < 4) {
        setSelectedMoves([...selectedMoves, move]);
      } else {
        alert("You can select only 4 moves.");
      }
    } else {
      alert("Move already selected.");
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

  const handleBeginBattle = () => {
    // Handle logic for beginning the battle
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
                  <button onClick={() => handleMoveSelect(move)}>{move}</button>
                </li>
              ))}
          </ul>
        )}
        <div>
          <h4>Selected Moves:</h4>
          <ul className="flex">
            {selectedMoves.map((move, index) => (
              <li key={index}>
                <button id="RemoveButt" onClick={() => removeMove(move)}>
                  Remove
                </button>{" "}
                <button id="moves-container">{move}</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {!confirmed && (
            <button id="ConfirmMovesButton" onClick={handleConfirm}>
              {confirmButtonText}
            </button>
          )}
        </div>
        {confirmed && (
          <div>
            <StartBattleMusicButton onClick={handleBeginBattle} />
          </div>
        )}
      </div>
    </>
  );
}

export default MovePoolDropDown;
