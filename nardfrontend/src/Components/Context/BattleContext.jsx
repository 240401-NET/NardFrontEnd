import React, { createContext, useState, useContext } from "react";

const BattleContext = createContext();

const BattleContextProvider = ({ children }) => {
  const [battleInfo, setBattleInfo] = useState(null);
  const [battleLog, setBattleLog] = useState([]);
  const [updatedBattleData, setUpdatedBattleData] = useState({
    Summary: "this. is. a. sentence",
  });

  return (
    <BattleContext.Provider
      value={{
        battleInfo,
        setBattleInfo,
        battleLog,
        setBattleLog,
        updatedBattleData,
        setUpdatedBattleData,
      }}
    >
      {children}
    </BattleContext.Provider>
  );
};

export { BattleContext, BattleContextProvider };
