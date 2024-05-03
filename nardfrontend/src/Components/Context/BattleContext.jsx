import React, { createContext, useState } from "react";

const BattleContext = createContext();

const BattleContextProvider = ({ children }) => {
  return <BattleContext.Provider value={{}}>{children}</BattleContext.Provider>;
};

export { BattleContext, BattleContextProvider };
