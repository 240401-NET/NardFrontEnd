import React, { useState } from "react";
import { Link } from "react-router-dom";
import BeginButton from "./BeginButton";

function BattlePage() {
  //Window that displays messages during battle
  const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <>
      {/* <BattleMessage />
      <div className="battlePage" id="Battlebox"> */}
      {/* ($"{{ selectedPokemon }} Vs. {{ randomPokemon }}") */}
      {/* <h1 id="VsBanner">CHARIZARD Vs. PIKACHU</h1> */}
      <span>
        {/* <div className="HPGauges">
            <PlayerOneHpGauge />
            <PlayerTwoHpGauge />
          </div> */}
      </span>
      <span>
        <div className="Begin">
          <BeginButton />
        </div>
      </span>
    </>
  );
}

export default BattlePage;
