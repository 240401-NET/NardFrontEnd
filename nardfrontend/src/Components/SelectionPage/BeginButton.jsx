import React from "react";
import { Link } from "react-router-dom";

function BeginButton() {
  //Link to Selection Component

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/selection" name="BeginButton">
        <button id="BButt" className="btn btn-begin">
          Begin
        </button>
      </Link>
    </div>
  );
}
export default BeginButton;
