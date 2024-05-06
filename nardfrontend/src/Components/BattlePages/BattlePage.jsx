import React, { useState } from "react";

import BattleMessage from "./BattleMessage";
import DuringBattleMoveDrop from "./DuringBattleMoveDrop";
import PlayerOneHpGauge from "./PlayerOneHpGauge";
import PlayerTwoHpGauge from "./PlayerTwoHpGauge";
import PlayerBattleSprite from "./PlayerBattleSprite";
import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";
import SelectPokemonDropSearch from "../SelectionPage/SelectPokemonDropSearch";
import MovePoolDropDown from "../SelectionPage/MovePoolDropDown";
import RandomizedOpponentButton from "../SelectionPage/RandomizedOpponentButton";

function BattlePage() {
  //Window that displays messages during battle
  const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <>
      <div className="battlePage" id="Battlebox">
        <BattleMessage />
      </div>
      <span
        style={{
          display: "flex",
          justifyContent: "flexaround",
        }}
      >
        <div>
          <SelectPokemonDropSearch />
        </div>
        <div>
          <MovePoolDropDown />
        </div>

        <div
          id="ROButt"
          style={{
            display: "flex",
            justifyContent: "right",
            backgroundColor: "transparent",
          }}
        >
          <RandomizedOpponentButton />
        </div>
      </span>
    </>
  );
}

export default BattlePage;
