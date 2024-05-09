import React, { createContext, useState, useContext } from "react";

const BattleContext = createContext();

const BattleContextProvider = ({ children }) => {
  const [battleInfo, setBattleInfo] = useState(null);
  const [battleLog, setBattleLog] = useState([]);
  const [updatedBattleData, setUpdatedBattleData] = useState("this. is. a. sentence");
  const [winnerFlag, setWinnerFlag] = useState(0);

  return (
    <BattleContext.Provider
      value={{
        battleInfo,
        setBattleInfo,
        battleLog,
        setBattleLog,
        updatedBattleData,
        setUpdatedBattleData,
        winnerFlag,
        setWinnerFlag,
      }}
    >
      {children}
    </BattleContext.Provider>
  );
};

export { BattleContext, BattleContextProvider };
