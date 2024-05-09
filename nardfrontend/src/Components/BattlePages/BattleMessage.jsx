import React, { useEffect } from "react";
import { BattleContext } from "../Context/BattleContext";
import { useContext } from "react";
import TextDisplayer from "./TextDisplayer";

function BattleMessage({}) {
  const { updatedBattleData, setUpdatedBattleData } = useContext(BattleContext);

  useEffect(() => {
    console.log(updatedBattleData);
  }, [setUpdatedBattleData]);
  if (!updatedBattleData) {
    console.log("Whatever is null");
    return null;
  }
  return (
    <div
      id="Battlebox"
      style={{
        marginBottom: "20px",
      }}
    >
      <div>
        <h1>Battle Logs:</h1>
        <div style={{}}>
          {updatedBattleData.split(". ").map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BattleMessage;
