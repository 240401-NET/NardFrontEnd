import React, { useState } from "react";
// Import CSS file for styling modal

function RulesModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} id="RButt">
        Rules
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Instructions</h2>
            Select a Pokemon the n select 4 moves
            <p>Click the Begin Battle Music.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RulesModal;
