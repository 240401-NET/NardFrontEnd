import React from "react";
import BattleMessage from "./BattleMessage";
import DuringBattleMoveDrop from "./DuringBattleMoveDrop";
import PlayerOneHpGauge from "./PlayerOneHpGauge";
import PlayerTwoHpGauge from "./PlayerTwoHpGauge";
import PlayerBattleSprite from "./PlayerBattleSprite";
import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";

function BattlePage() {
  //Window that displays messages during battle
  return (
    <>
      <BattleMessage />
      <div className="battlePage">
        <span>
          <div className="HPGauges">
            <PlayerOneHpGauge />
            <PlayerTwoHpGauge />
          </div>
        </span>
        <span>
          <div className="BPSprites flexaround">
            <div className="PlayerOneSprite">
              <PlayerBattleSprite />
            </div>
            <div className="PlayerTwoSprite">
              <OpponentsSpritesDisplay />
            </div>
          </div>
        </span>
        <div className="flexaround">
          <DuringBattleMoveDrop />
        </div>
      </div>
    </>
  );
}

export default BattlePage;
