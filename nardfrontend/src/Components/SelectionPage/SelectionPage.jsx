// import { NavLink } from "react-router-dom";
// import MovePoolDropDown from "./MovePoolDropDown";
import StartBattleMusicButton from "./StartBattleMusicButton";
import ViewLeaderboardButton from "./ViewLeaderboardButton";
// import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";
import SelectPokemonDropSearch from "./SelectPokemonDropSearch";
import RandomizedOpponentButton from "./RandomizedOpponentButton";
// import PlayersSpritesDisplay from "../PlayersSpritesDisplay";
import BattleMessage from "../BattlePages/BattleMessage";

function SelectionPage() {
  return (
    <>
      <div>
        <BattleMessage id="Battlebox" />
      </div>
      <span className="selectionPage">
        <div className="Player">
          <div className="compdiv" id="SPDS">
            <SelectPokemonDropSearch />
          </div>
          {/* <div className="compdiv">
            <PlayersSpritesDisplay />
          </div> */}
          {/* <div className="compdiv" id="MPDD">
            <MovePoolDropDown />
          </div> */}
        </div>
        <div className="Player">
          <div className="compdiv">
            <RandomizedOpponentButton />
          </div>
          {/* <div className="compdiv">
            <OpponentsSpritesDisplay />
          </div> */}
        </div>
      </span>
      <div className="compdiv">
        <StartBattleMusicButton />
      </div>
      <div className="compdiv">
        <ViewLeaderboardButton />
      </div>
    </>
  );
}
export default SelectionPage;
