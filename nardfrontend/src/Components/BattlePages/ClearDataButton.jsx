import React from "react";

function ClearDataButton() {
  const handleClearData = () => {
    // Clear all data or perform a hard refresh here

    // Perform a hard refresh (reload) of the page
    window.location.reload(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={handleClearData} id="CDButt">
        Clear Data
      </button>
    </div>
  );
}

export default ClearDataButton;
