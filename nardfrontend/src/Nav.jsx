import { NavLink } from "react-router-dom";
import "./Nav.css";
import RulesModal from "./Components/RulesModal";
import logoNard from "./Assets/logoNard.jpg";
import ClearDataButton from "./Components/BattlePages/ClearDataButton";
import WinnerModal from "./Components/BattlePages/WinnerModal";

function Nav() {
  return (
    <nav id="thenav" className="flexbetween">
      <ul>
        <li className="navitem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/battle">Battle Page</NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/leaderboard">Leaderboard Page</NavLink>
        </li>
      </ul>
      <WinnerModal />
      <div>
        <ClearDataButton />
      </div>
      <div className="button" id="RButtdiv">
        <RulesModal />
      </div>
      <div>
       
        <img id="logous"  alt="Our Logo" src={logoNard} />
      </div>

 
    </nav>
  );
}

export default Nav;
