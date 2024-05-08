import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BattleContext } from "../Context/BattleContext";

function TextDisplayer() {
  const textToType = "RICARDO STINKS";
  const [displayText, setDisplayText] = useState("Battle Log"); // State to manage the displayed text
  const { updatedBattleData } = useContext(BattleContext);

  useEffect(() => {
    setDisplayText(updatedBattleData);
    console.log(updatedBattleData);
  }, [updatedBattleData]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= displayText.length) {
        setDisplayText(displayText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed: 100 milliseconds per character

    return () => clearInterval(typingInterval); // Cleanup function
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
}

export default TextDisplayer;
