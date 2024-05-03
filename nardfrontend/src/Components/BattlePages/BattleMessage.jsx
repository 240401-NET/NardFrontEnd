import React from "react";

function BattleMessage({ messages }) {
  // Ensure that messages is always an array
  const messageList = Array.isArray(messages) ? messages : [];

  return (
    <div
      id="Battlebox"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <div>
        <h3>Battle Messages</h3>
        <div style={{ maxHeight: "200px", overflowY: "auto" }}>
          {messageList.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BattleMessage;
