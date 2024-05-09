import React, { useState, useEffect, useContext } from "react";
import Trophy from "../../Assets/poketrop.jpg";
import { BattleContext } from "../Context/BattleContext";


function WinnerModal() {
  const { winnerFlag} = useContext(BattleContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if(winnerFlag !== 0)
    {toggleModal();}
    } ,[winnerFlag]);

  return (
    <div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Win has been updated</h2>
            <img
        src={Trophy}
          alt="Player One Pokemon Sprite"
          className="flipped-horizontal"
          id="trophy"
          style={{
            transform: "scale(1.0)",
            transformOrigin: "0 0",
            transition: "transform 0.3s ease",
          }}
        />
          </div>
        </div>
      )}
    </div>
  );
}

export default WinnerModal;
