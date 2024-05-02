import React, { useState, useEffect } from "react";
import DuringBattleMoveDrop from "../BattlePages/DuringBattleMoveDrop";

function MovePoolDropDown({ selectedPokemon, pokemonList, onSelectMoves }) {
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmButtonText, setConfirmButtonText] =
    useState("Confirm Selection");

  // Reset selected moves when a new Pokemon is chosen
  useEffect(() => {
    setSelectedMoves([]);
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
    onSelectMoves(selectedMoves);
    setOpen(false); // Close the dropdown after confirming moves
    setConfirmButtonText("Confirmed!");
  };

  return (
    <div className="dropdown">
      <button onClick={handleClick} id="MovePoolDrop">
        {open ? "Close Menu" : "Select Moves"}
      </button>
      {open && (
        <ul className="menu">
          {pokemonList
            .find((pokemon) => pokemon.name === selectedPokemon)
            .movePool.map((move, index) => (
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
              {move}{" "}
              <button id="RemoveButt" onClick={() => removeMove(move)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button id="ConfirmMovesButton" onClick={handleConfirm}>
        {confirmButtonText}
      </button>
    </div>
  );
}

export default MovePoolDropDown;
