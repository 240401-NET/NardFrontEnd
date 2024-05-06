import { NavLink } from "react-router-dom";
import "./Nav.css";
import RulesModal from "./Components/RulesModal";
import logoNard from "./Assets/logoNard.png";

function Nav() {
  return (
    <nav id="thenav" className="flexbetween">
      <ul>
        {/* /* add selection path link here? */}
        {/* <li className="navitem">
          <NavLink to="/">Home</NavLink>
        </li> */}
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
      <div>
        {/* <div className="container" id="RightNav"> */}
        {/* <div style={{ display: "flex", justifyContent: "right" }} id="uslogo"> */}
        {/* <NavLink to="https://github.com/240401-NET/NardBackEnd/blob/main/README.md"> */}
        <img id="logous" src={logoNard} />
      </div>

      {/* </div> */}
      <div className="button" id="RButtdiv">
        <RulesModal />
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Nav;
