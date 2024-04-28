import React, { useState, useEffect } from "react";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch("/Pokemon/getAllPokemon");
        const data = await response.json();
        setPokemonList(data);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <h2>Choose</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
