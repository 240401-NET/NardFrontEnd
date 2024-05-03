import { NavLink } from "react-router-dom";
import "./Nav.css";
import RulesModal from "./Components/RulesModal";
import <Nard className="png"></Nard> from "src/Assets/Nard.png";

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
      <div className="container" id="RightNav">
        <div style={{ display: "flex", justifyContent: "right" }} id="uslogo">
          <NavLink to="https://github.com/240401-NET/NardBackEnd/blob/main/README.md">
            NARD INC.
          </NavLink>
          <div className="button" id="RButtdiv">
            <RulesModal />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
