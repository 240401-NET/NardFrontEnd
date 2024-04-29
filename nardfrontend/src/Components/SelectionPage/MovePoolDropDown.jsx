import React, { useState, useEffect } from "react";

function MovePoolDropDown({ selectedPokemonMoves }) {
  const [movePool, setMovePool] = useState([]);
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchMoves();
  }, []);

  const fetchMoves = async () => {
    try {
      // Fetch only the moves associated with the selected Pokémon
      const response = await fetch(`/Moves/${selectedPokemonMoves}`);
      const data = await response.json();
      setMovePool(data); // Assuming the API response is an array of moves
    } catch (error) {
      console.error("Error fetching moves:", error);
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  // Function to handle move selection
  const handleMoveSelect = (move) => {
    // Check if the move is already selected
    if (!selectedMoves.includes(move)) {
      // Check if the user has selected less than 4 moves
      if (selectedMoves.length < 4) {
        setSelectedMoves([...selectedMoves, move]);
      } else {
        // Display a message indicating that only 4 moves can be selected
        alert("You can select only 4 moves.");
      }
    } else {
      // Display a message indicating that the move is already selected
      alert("Move already selected.");
    }
  };

  // Function to remove a selected move
  const removeMove = (move) => {
    setSelectedMoves(
      selectedMoves.filter((selectedMove) => selectedMove !== move)
    );
  };

  return (
    <div
      className="dropdown id='MPDD2' "
      style={{ display: "flex", justifyContent: "left" }}
    >
      <button onClick={handleOpen}>Select Moves</button>
      {open ? (
        <ul className="menu">
          {movePool.map((move, index) => (
            <li className="menu-item" key={index}>
              <button
                onClick={() => handleMoveSelect(move.name)}
                id={`getfrompool${index}`}
              >
                {move.name}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {open ? (
        <div>
          <h4>Selected Moves:</h4>
          <ul>
            {selectedMoves.map((move, index) => (
              <li key={index}>
                {move} <button onClick={() => removeMove(move)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default MovePoolDropDown;
