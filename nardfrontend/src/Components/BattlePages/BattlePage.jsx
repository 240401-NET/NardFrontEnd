import React from "react";

import BattleMessage from "./BattleMessage";
import DuringBattleMoveDrop from "./DuringBattleMoveDrop";
import PlayerOneHpGauge from "./PlayerOneHpGauge";
import PlayerTwoHpGauge from "./PlayerTwoHpGauge";
import PlayerBattleSprite from "./PlayerBattleSprite";
import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";
import SelectPokemonDropSearch from "../SelectionPage/SelectPokemonDropSearch";
import MovePoolDropDown from "../SelectionPage/MovePoolDropDown";
import RandomizedOpponentButton from "../SelectionPage/RandomizedOpponentButton";
import StartBattleMusicButton from "../SelectionPage/StartBattleMusicButton";

function BattlePage() {
  //Window that displays messages during battle
  // const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <>
      <div className="battlePage" id="Battlebox">
        <BattleMessage />
      </div>
      {/* <div id="video-container">
        <video id="myVideo" autoPlay muted loop>
          <source src="../../Assets/PokeVid.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "flexaround",
          }}
        >
          <div>
            <SelectPokemonDropSearch />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <RandomizedOpponentButton />
          </div>
        </span>
      </div>
      <div>
      <StartBattleMusicButton />
      </div>
      {/* <div>
        <MovePoolDropDown />
      </div> */}
    </>
  );
}

export default BattlePage;
