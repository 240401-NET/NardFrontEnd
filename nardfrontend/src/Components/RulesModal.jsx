import React, { useState } from "react";

function RulesModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} id="RButt">
      Not Winner
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Instructions</h2>
            <ol>
              <li>Enter the Arena</li>
              <li>Select a Pokemon</li>
              <li>Select 4 Moves</li>
              <li>Confirm Your Selection</li>
              <li>Click The Find New Opponent Button</li>
              <li>Click the Begin Battle Button</li>
              <li>Select a Move to Use</li>
              <li>The Battle Log Describes the Round</li>
              <li>Repeat Selecting moves until one Pokemon Retires</li>
              <li>Celebrate Your Victory!</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default RulesModal;
