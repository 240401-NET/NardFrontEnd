import React, { useState, useEffect } from "react";

function SelectPokemonDropSearch() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  // Function to handle selecting a Pokémon
  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  // Function to fetch Pokémon data and populate the dropdown
  const fetchPokemonList = async () => {
    try {
      // Fetch Pokémon data from the server using the getAllPokemon endpoint
      const response = await fetch("/Pokemon/getAllPokemon");
      const data = await response.json();
      // Set the fetched Pokémon data to the state
      setPokemonList(data);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  // Fetch Pokémon data on component mount
  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div
      className="selection-page"
      style={{ display: "flex", justifyContent: "left" }}
    >
      {/* Dropdown to select Pokémon */}
      <select onChange={(e) => handleSelectPokemon(e.target.value)}>
        <option value="">Select a Pokémon</option>
        {pokemonList.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default SelectPokemonDropSearch;
