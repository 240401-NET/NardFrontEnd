import React, { useState, useEffect, useContext } from "react";
import PlayersSpritesDisplay from "../PlayersSpritesDisplay";
import MovePoolDropDown from "./MovePoolDropDown";
import PlayerBattleSprite from "../BattlePages/PlayerBattleSprite";
import RandomizedOpponentButton from "./RandomizedOpponentButton";
import StartBattleMusicButton from "./StartBattleMusicButton";
import { PokemonContext } from "../Context/PokemonContext";

function SelectPokemonDropSearch() {
  // const [selectedPokemon, setSelectedPokemon] = useState("");
  const {
    selectedPokemon,
    setSelectedPokemon,
    selectedMoves,
    setSelectedMoves,
  } = useContext(PokemonContext);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListError, setPokemonListError] = useState("");
  // const [selectedMoves, setSelectedMoves] = useState([]);

  // Function to handle selecting a Pokémon
  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    setSelectedMoves([]); // Reset selected moves when a new Pokemon is chosen
  };
  const handleSelectMoves = (moves) => {
    setSelectedMoves(moves);
  };

  // Function to handle selecting an opponent
  const handleSelectOpponent = (opponent) => {
    // Handle opponent selection logic here
    console.log("Selected opponent:", opponent);
  };

  // Function to fetch Pokémon data and populate the dropdown
  const fetchPokemonList = async () => {
    try {
      // Fetch Pokémon data from the server using the getAllPokemon endpoint
      const response = await fetch(
        "http://localhost:5019/Pokemon/getAllPokemon"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon data");
      }
      const data = await response.json();
      // Set the fetched Pokémon data to the state
      setPokemonList(data);
    } catch (error) {
      setPokemonListError(
        "Failed to fetch Pokémon data. Please try again later."
      );
    }
  };

  // Fetch Pokémon data on component mount
  useEffect(() => {
    fetchPokemonList();
  }, []);

  useEffect(() => {
    console.log("Pokemon list:", pokemonList); // Log the pokemonList state
  }, [pokemonList]);

  useEffect(() => {
    console.log("Selected Pokemon:", selectedPokemon);
  }, [selectedPokemon]);

  useEffect(() => {
    console.log("Selected Moves:", selectedMoves);
  }, [selectedMoves]);

  return (
    <div className="selection-page">
      {pokemonListError && { pokemonListError }}
      {/* Dropdown to select Pokémon */}
      <select id="SPButt" onChange={(e) => handleSelectPokemon(e.target.value)}>
        <option value="">Select a Pokémon</option>
        {pokemonList.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>

      {/* Display selected Pokémon sprite */}
      <PlayersSpritesDisplay
        pokemonList={pokemonList}
        selectedPokemon={selectedPokemon}
      />
      {/* <StartBattleMusicButton selectedPokemonId={selectedPokemonId} /> */}
      <h1 id="PlayerTitle">{selectedPokemon.toUpperCase()}</h1>

      {/* Display selected Pokémon moves */}
      {selectedPokemon && (
        <MovePoolDropDown
          selectedPokemon={selectedPokemon}
          pokemonList={pokemonList}
          onSelectMoves={handleSelectMoves} // Pass onSelectMoves function as a prop
        />
      )}
      {/* {selectedPokemon && (
        <PlayerBattleSprite
          selectedPokemon={selectedPokemon}
          pokemonList={pokemonList}
        />
      )} */}

      {/* <RandomizedOpponentButton onSelectOpponent={handleSelectOpponent} /> */}

      {/* Display selected Pokémon details */}
      {selectedPokemon && (
        <div>
          {/* You can display other details of the selected Pokémon here  */}
        </div>
      )}
    </div>
  );
}
export default SelectPokemonDropSearch;
