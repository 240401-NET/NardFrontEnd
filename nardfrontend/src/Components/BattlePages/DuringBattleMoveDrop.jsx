import React from "react";

function DuringBattleMoveDrop({ selectedMoves, moveList }) {
  if (!moveList || moveList.length === 0) {
    return <p>No moves available.</p>;
  }

  return (
    <form>
      <select name="duringbattlemovedrop" id="DBMD">
        <option value="">Select a move</option>
        {moveList.map((move) => (
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
