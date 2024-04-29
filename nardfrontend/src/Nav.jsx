import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav id="thenav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/battle">Battle Page</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard">Leaderboard Page</NavLink>
        </li>
      </ul>
      <div style={{ display: "flex", justifyContent: "right" }} id="uslogo">
        NARD INC.
      </div>
    </nav>
  );
}

export default Nav;
