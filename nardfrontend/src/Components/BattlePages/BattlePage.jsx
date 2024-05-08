import React from "react";

import SelectPokemonDropSearch from "../HomePages/SelectPokemonDropSearch";

import RandomizedOpponentButton from "../HomePages/RandomizedOpponentButton";

import TextDisplayer from "./TextDisplayer";

function BattlePage() {
  //Window that displays messages during battle
  // const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <>
      <div id="TD">
        <TextDisplayer />
      </div>
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <SelectPokemonDropSearch
            style={{
              display: "flex",
              justifyContent: "left",
            }}
          />

          <RandomizedOpponentButton
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          />
        </span>
      </div>
    </>
  );
}

export default BattlePage;
