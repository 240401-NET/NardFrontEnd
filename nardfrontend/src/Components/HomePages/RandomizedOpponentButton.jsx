import React, { useState, useEffect, useContext } from "react";
// import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";
import { PokemonContext } from "../Context/PokemonContext";

function RandomizedOpponentButton() {
  const { randomPokemon, setRandomPokemon, randomMoves, setRandomMoves } =
    useContext(PokemonContext);
  //console.log("dog"); i got that dog in me
  // const [randomMoves, setRandomMoves] = useState([]);
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
      // onSelectOpponent(data);

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
    <div
    // className="button flexaround"

    // id="ROButt"
    >
      <button
        className="nothing"
        id="ROButt"
        onClick={handleClick}
        style={{ display: "flex", justifyContent: "right" }}
        // style={{ display: "flex", justifyContent: "right" }}
      >
        Find New Opponent
      </button>

      {/* <div>{error && <p>{error}</p>}</div> */}
      {randomPokemon && (
        <div>
          <div
            style={{
              fontSize: "40px",
              color: "brown",
              fontWeight: "bolder",
            }}
          >
            {randomPokemon.name.toUpperCase()}
          </div>
          <img
            src={randomPokemon.sprite}
            alt={randomPokemon.name}
            style={{
              transform: "scale(3.5)" /* Magnify the image by scaling it */,
              transformOrigin: "0 0" /* Set the origin of the transformation */,
              transition: "transform 0.3s ease" /* Add smooth transition */,
            }}
            // style={{ width: "200px", height: "200px" }}
            // className="flexaround"
          />
          {randomMoves && randomMoves.length > 0 && (
            <div
              style={{
                marginTop: "20vh",
              }}
            >
              <h3 id="MovesTitle">MOVES:</h3>
              <ul id="MovesSub">
                {randomMoves &&
                  randomMoves.split(",").map((move, index) => (
                    <li id="OpMoveList" key={index}>
                      {move}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RandomizedOpponentButton;
