import React from "react";

function DuringBattleMoveDrop({ selectedMoves, moveList }) {
  if (!moveList || moveList.length === 0) {
    return <p>No moves available.</p>;
  }

  // Filter moveList to only include moves selected in selectedMoves
  const selectedMoveOptions = moveList.filter((move) =>
    selectedMoves.includes(move.id)
  );
  if (!moveList || moveList.length === 0) {
    return <p>No moves available.</p>;
  } else
    return (
      <form>
        <select name="duringbattlemovedrop" id="DBMD">
          <option value="">Select a move</option>
          {selectedMoveOptions.map((move) => (
            <option key={move.id} value={move.name}>
              {move.name}
            </option>
          ))}
        </select>
      </form>
    );
}

export default DuringBattleMoveDrop;
