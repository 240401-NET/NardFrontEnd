import React, { useState, useEffect } from "react";
import { PokemonContextProvider } from "./PokemonContext";
import { BattleContextProvider } from "./BattleContext";

const AppProvider = ({ children }) => {
  return (
    <BattleContextProvider>
      <PokemonContextProvider>{children}</PokemonContextProvider>
    </BattleContextProvider>
  );
};

export default AppProvider;
