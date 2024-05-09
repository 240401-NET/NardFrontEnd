import React, { useState, useEffect, useContext } from "react";
// import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";
import { PokemonContext } from "../Context/PokemonContext";
import { BattleContext } from "../Context/BattleContext";

function RandomizedOpponentButton() {
  const { randomPokemon, setRandomPokemon, randomMoves, setRandomMoves } =
    useContext(PokemonContext);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      // Make the HTTP request to fetch a random Pokémon
      const response = await fetch(
        "http://localhost:5019/Pokemon/getRandomPokemon"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch random Pokémon");
      }
      const data = await response.json();
      setRandomPokemon(data);

      // Fetch random moves only if the Pokémon fetching is successful
      try {
        const movesResponse = await fetch(
          `http://localhost:5019/Moves/getRandomMoves/${data.id}`
        );
        console.log(data.id);
        if (!movesResponse.ok) {
          throw new Error("Failed to fetch random moves");
        }
        const movesData = await movesResponse.text();
        console.log(movesData);
        setRandomMoves(movesData);
      } catch (error) {
        console.log("Error fetching random moves:", error.message);
        setError("Error fetching random moves");
      }
    } catch (error) {
      console.log("Error fetching random Pokémon:", error.message);
      setError("Error fetching random Pokémon");
    }
  };

  useEffect(() => {
    console.log("Selected Opponent:", randomPokemon);
  }, [randomPokemon]);

  useEffect(() => {
    console.log("Selected Opponent's Moves:", randomMoves);
  }, [randomMoves]);

  return (
    <div>
      <button
        className="nothing"
        id="ROButt"
        onClick={handleClick}
        style={{ display: "flex", justifyContent: "right" }}
      >
        Find New Opponent
      </button>
      {randomPokemon && (
        <div>
          <div
            style={{
              fontSize: "40px",
              color: "brown",
              fontWeight: "bolder",
              marginTop: "50px",
              fontSize: "65px",
            }}
          >
            {randomPokemon.name.toUpperCase()}
          </div>
          <img
            src={randomPokemon.sprite}
            alt={randomPokemon.name}
            style={{
              transform: "scale(3.0)" ,
              transformOrigin: "0 0" ,
              transition: "transform 0.3s ease" ,
            }}
          />
          <span 
          style={{ display: "flex",
            justifyContent: "space-around",
          }}>
          <div>
        <>
          {randomPokemon ? (
            <div>
              <h3 style={{ marginTop: "20vh" }}>Stats</h3>
              <ul style={{ fontWeight: "bolder", fontSize: "20px" }}>
                <li>HP: {randomPokemon.hp}</li>
                <li>Attack: {randomPokemon.atk}</li>
                <li>Defense: {randomPokemon.def}</li>
                <li>Speed: {randomPokemon.spd}</li>
              </ul>{" "}
            </div>
          ) : null}
        </>
        </div>
          {randomMoves && randomMoves.length > 0 && (
            <div>
              <h3 id="MovesTitle" style={{ marginTop: "20vh" }}>MOVES:</h3>
              <ol id="MovesSub">
                {randomMoves &&
                  randomMoves.split(",").map((move, index) => (
                    <li id="OpMoveList" key={index}>
                      {move}
                    </li>
                  ))}
              </ol>
            </div>
          )}
          </span>
        </div>
      )}
    </div>
  );
}

export default RandomizedOpponentButton;
