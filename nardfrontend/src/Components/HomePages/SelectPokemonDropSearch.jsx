import React, { useState, useEffect, useContext } from "react";
import PlayersSpritesDisplay from "../PlayersSpritesDisplay";
import MovePoolDropDown from "./MovePoolDropDown";
import { PokemonContext } from "../Context/PokemonContext";

function SelectPokemonDropSearch() {
  const {
    selectedPokemon,
    setSelectedPokemon,
    selectedMoves,
    setSelectedMoves,
    pokemonInfo,
    setPokemonInfo,
  } = useContext(PokemonContext);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListError, setPokemonListError] = useState("");
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    setSelectedMoves([]);
  };
  const handleSelectMoves = (moves) => {
    setSelectedMoves(moves);
  };

  const fetchPokemonList = async () => {
    try {
      const response = await fetch(
        "http://localhost:5019/Pokemon/getAllPokemon"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon data");
      }
      const data = await response.json();
      setPokemonList(data);
      setFilteredPokemonList(data);
    } catch (error) {
      setPokemonListError(
        "Failed to fetch Pokémon data. Please try again later."
      );
    }
  };

  const fetchPokemonInfo = async (pokemonName) => {
   
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

  useEffect(() => {
    fetchPokemonList();
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
    console.log("Pokemon Info:", pokemonInfo); // Log the pokemonList state
  }, [pokemonInfo]);

  useEffect(() => {
    console.log("Selected Pokemon:", selectedPokemon);
  }, [selectedPokemon]);

  useEffect(() => {
    console.log("Selected Moves:", selectedMoves);
  }, [selectedMoves]);
  console.log(pokemonInfo);

  return (
    <div className="selection-page">
      {pokemonListError && <p>{pokemonListError}</p>}

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        id="SPsearchbar"
      />
      <select id="SPButt" onChange={(e) => handleSelectPokemon(e.target.value)}>
        <option value="">View Pokemon Options</option>
        {filteredPokemonList.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <>
          {pokemonInfo ? (
            <div>
              <h2 style={{ marginTop: "13vh" }}>Stats</h2>
              <ul style={{ fontWeight: "bolder", fontSize: "20px" }}>
                <li>HP: {pokemonInfo.hp}</li>
                <li>Attack: {pokemonInfo.atk}</li>
                <li>Defense: {pokemonInfo.def}</li>
                <li>Speed: {pokemonInfo.spd}</li>
              </ul>{" "}
            </div>
          ) : null}
        </>
        <div>
          <h1 style={{ marginLeft: "95px", fontSize: "65px" }} id="PlayerTitle">
            {selectedPokemon.toUpperCase()}
          </h1>
          <PlayersSpritesDisplay
            pokemonList={pokemonList}
            selectedPokemon={selectedPokemon}
          />
        </div>
      </div>
      {selectedPokemon && (
        <MovePoolDropDown
          selectedPokemon={selectedPokemon}
          pokemonList={pokemonList}
          onSelectMoves={handleSelectMoves}
        />
      )}

      {selectedPokemon && (
        <div>
         
        </div>
      )}
    </div>
  );
}
export default SelectPokemonDropSearch;
