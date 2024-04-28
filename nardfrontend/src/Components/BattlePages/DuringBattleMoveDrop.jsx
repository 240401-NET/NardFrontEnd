import React, { useState, useEffect } from "react";

function DuringBattleMoveDrop({ selectedMoves }) {
  const [moveList, setMoveList] = useState([]);

  useEffect(() => {
    const fetchMoveList = async () => {
      try {
        const response = await fetch("/Moves/allMoves");
        const data = await response.json();
        setMoveList(data);
      } catch (error) {
        console.error("Error fetching move list:", error);
      }
    };

    fetchMoveList();
  }, []);

  return (
    <form>
      <select name="duringbattlemovedrop" namespace="duringbattlemovedrop">
        <option value="">Select a move</option>
        {/* Render each move from the moveList */}
        {moveList.map((move) => (
          // Check if the move is selected
          <option
            key={move.id}
            value={move.name}
            selected={selectedMoves.includes(move.name)}
          >
            {move.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default DuringBattleMoveDrop;
