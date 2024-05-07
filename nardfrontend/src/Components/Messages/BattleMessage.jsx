import React from "react";

function BattleMessage({ messages }) {
  // Ensure that messages is always an array
  const messageList = Array.isArray(messages) ? messages : [];

  return (
    <div
      id="Battlebox"
      style={{
        marginBottom: "20px",
      }}
    >
      <div>
        <h1>Battle Logs</h1>
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
