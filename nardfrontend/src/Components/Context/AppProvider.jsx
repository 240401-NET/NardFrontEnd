import React, { useState, useEffect } from "react";
import { PokemonContextProvider } from "./PokemonContext";

const AppProvider = ({ children }) => {
  return <PokemonContextProvider>{children}</PokemonContextProvider>;
};

export default AppProvider;
