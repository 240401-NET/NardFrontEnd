// import { NavLink } from "react-router-dom";
import MovePoolDropDown from "./MovePoolDropDown";
import StartBattleMusicButton from "./StartBattleMusicButton";
import ViewLeaderboardButton from "./ViewLeaderboardButton";
import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";
import SelectPokemonDropSearch from "./SelectPokemonDropSearch";
import RandomizedOpponentButton from "./RandomizedOpponentButton";
import PlayersSpritesDisplay from "../PlayersSpritesDisplay";

function SelectionPage() {
  return (
    <>
      <div className="compdiv">
        <SelectPokemonDropSearch />
      </div>
      <div className="compdiv" id="MPDD">
        <MovePoolDropDown />
      </div>
      <div className="compdiv">
        <PlayersSpritesDisplay />
      </div>
      <div className="compdiv">
        <OpponentsSpritesDisplay />
      </div>
      <div className="compdiv">
        <RandomizedOpponentButton />
      </div>
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
