import React, { useState } from "react";

import BattleMessage from "./BattleMessage";
import DuringBattleMoveDrop from "./DuringBattleMoveDrop";
import PlayerOneHpGauge from "./PlayerOneHpGauge";
import PlayerTwoHpGauge from "./PlayerTwoHpGauge";
import PlayerBattleSprite from "./PlayerBattleSprite";
import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";

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
        <div className="BPSprites flexaround">
          <div className="PlayerOneSprite">
            {selectedPokemon && (
              <PlayerBattleSprite selectedPokemon={selectedPokemon} />
            )}
          </div>
          <div className="PlayerTwoSprite">
            <OpponentsSpritesDisplay />
          </div>
        </div>
      </span>
      <div className="flexaround">
        <DuringBattleMoveDrop />
      </div>
    </>
  );
}

export default BattlePage;
