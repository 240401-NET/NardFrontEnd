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
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      setFilteredPokemonList(data);
    } catch (error) {
      setPokemonListError(
        "Failed to fetch Pokémon data. Please try again later."
      );
    }
  };

  const fetchPokemonInfo = async (pokemonName) => {
    // Fetch Pokémon data from the server using the searchPokemon endpoint
    try {
      const response = await fetch(
        `http://localhost:5019/Pokemon/searchPokemon/${pokemonName}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon data");
      }
      const data = await response.json();

      setPokemonInfo(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  // Fetch Pokémon data on component mount
  useEffect(() => {
    fetchPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      fetchPokemonInfo(selectedPokemon);
    }
  }, [selectedPokemon]);

  useEffect(() => {
    setFilteredPokemonList(
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [pokemonList, searchTerm]);

  useEffect(() => {
    console.log("Pokemon list:", pokemonList); // Log the pokemonList state
  }, [pokemonList]);
  useEffect(() => {
    console.log("Pokemon Info:", PokemonInfo); // Log the pokemonList state
  }, [PokemonInfo]);

  useEffect(() => {
    console.log("Selected Pokemon:", selectedPokemon);
  }, [selectedPokemon]);

  useEffect(() => {
    console.log("Selected Moves:", selectedMoves);
  }, [selectedMoves]);
  console.log(PokemonInfo);

  return (
    <div className="selection-page">
      {pokemonListError && <p>{pokemonListError}</p>}

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        id="SPsearchbar"
      />
      {/* Dropdown to select Pokémon */}
      <select id="SPButt" onChange={(e) => handleSelectPokemon(e.target.value)}>
        <option value="">View Pokemon Options</option>
        {filteredPokemonList.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <span> */}
        <>
          {PokemonInfo ? (
            <div>
              <h2>Stats</h2>
              <ul>
                <li>Name: {PokemonInfo.name}</li>
                <li>HP: {PokemonInfo.hp}</li>
                <li>Attack: {PokemonInfo.atk}</li>
                <li>Defense: {PokemonInfo.def}</li>
                <li>Speed: {PokemonInfo.spd}</li>
              </ul>{" "}
            </div>
          ) : null}
        </>

        {/* Display selected Pokémon sprite */}
        <PlayersSpritesDisplay
          pokemonList={pokemonList}
          selectedPokemon={selectedPokemon}
        />

        {/* </span> */}
      </div>

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
          {/* {PokemonInfo} */}
          {/* You can display other details of the selected Pokémon here  */}
        </div>
      )}
    </div>
  );
}
export default SelectPokemonDropSearch;
