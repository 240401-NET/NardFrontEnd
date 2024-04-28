import React from "react";
import BattleMessage from "./BattleMessage";
import DuringBattleMoveDrop from "./DuringBattleMoveDrop";
import PlayerOneHpGauge from "./PlayerOneHpGauge";
import PlayerTwoHpGauge from "./PlayerTwoHpGauge";
import PlayersSpritesDisplay from "../PlayersSpritesDisplay";
import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";

function BattlePage() {
  //Window that displays messages during battle
  return (
    <>
      <BattleMessage />
      <PlayerOneHpGauge />
      <PlayersSpritesDisplay />
      <PlayerTwoHpGauge />
      <OpponentsSpritesDisplay />
      <DuringBattleMoveDrop />
    </>
  );
}

export default BattlePage;
