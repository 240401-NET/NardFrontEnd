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
  const [PokemonInfo, setPokemonInfo] = useState("");
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
      {
        pokemonListError && <p>{pokemonListError}</p>;
      }
      console.log("Failed to fetch Pokémon data. Please try again later.");
    }
  };

  const fetchPokemonInfo = async (pokemonId, setData) => {
    // Fetch Pokémon data from the server using the getAllPokemon endpoint
    const response = await fetch(
      `http://localhost:5019/Pokemon/getPokemon/${pokemonId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  };
  // Fetch Pokémon data on component mount
  useEffect(() => {
    fetchPokemonList();
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      fetchPokemonInfo(selectedPokemon, setPokemonInfo);
    }
  }, [selectedPokemon]);
  console.log(pokemonList.id);
  useEffect(() => {
    console.log("Pokemon list:", pokemonList); // Log the pokemonList state
  }, [pokemonList]);
  console.log(PokemonInfo);
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectedPokemon && (
          <div>
            <h2>Selected Pokemon Stats</h2>
            <ul>
              <li>Name: {PokemonInfo.name}</li>
              <li>HP: {PokemonInfo.hp}</li>
              <li>Attack: {PokemonInfo.atk}</li>
              {/* Add more stats as needed */}
            </ul>
          </div>
        )}
      </div>
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
      console.log(selectedPokemon)
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
          {PokemonInfo}
          {/* You can display other details of the selected Pokémon here  */}
        </div>
      )}
    </div>
  );
}
export default SelectPokemonDropSearch;
