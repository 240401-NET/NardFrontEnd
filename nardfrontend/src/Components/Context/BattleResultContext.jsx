import React, { createContext, useState } from "react";

const BattleResultContext = createContext();

const BattleResultContextProvider = ({ children }) => {
  return (
    <BattleResultContext.Provider value={{}}>
      {children}
    </BattleResultContext.Provider>
  );
};

export { BattleResultContext, BattleResultContextProvider };
