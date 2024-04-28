import { NavLink } from "react-router-dom";
import MovePoolDropDown from "./MovePoolDropDown";
import StartBattleMusicButton from "./StartBattleMusicButton";
import ViewLeaderboardButton from "./ViewLeaderboardButton";
import OpponentsSpritesDisplay from "../PlayersSpritesDisplay";
import SelectPokemonDropSearch from "./SelectPokemonDropSearch";

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
        <OpponentsSpritesDisplay />
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
