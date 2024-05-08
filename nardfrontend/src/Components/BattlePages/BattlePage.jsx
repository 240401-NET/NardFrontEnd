import React from "react";

import BattleMessage from "./BattleMessage";
import DuringBattleMoveDrop from "./DuringBattleMoveDrop";
import PlayerOneHpGauge from "./PlayerOneHpGauge";
import PlayerTwoHpGauge from "./PlayerTwoHpGauge";
import PlayerBattleSprite from "./PlayerBattleSprite";
import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";
import SelectPokemonDropSearch from "../HomePages/SelectPokemonDropSearch";
import MovePoolDropDown from "../HomePages/MovePoolDropDown";
import RandomizedOpponentButton from "../HomePages/RandomizedOpponentButton";
import StartBattleMusicButton from "../HomePages/StartBattleMusicButton";
import ClearDataButton from "./ClearDataButton";

function BattlePage() {
  //Window that displays messages during battle
  // const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <>
      <div className="battlePage" id="Battlebox">
        <BattleMessage />
      </div>
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <SelectPokemonDropSearch
            style={{
              display: "flex",
              justifyContent: "left",
            }}
          />

          <RandomizedOpponentButton
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          />
        </span>
      </div>
    </>
  );
}

export default BattlePage;
