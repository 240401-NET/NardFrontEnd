import React, { useState, useEffect } from "react";
// import OpponentsSpritesDisplay from "../OpponentsSpritesDisplay";

function RandomizedOpponentButton() {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [randomMoves, setRandomMoves] = useState([]);
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
        setRandomMoves(movesData.split(", "));
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
      className="button flexaround"
      // style={{ display: "flex", justifyContent: "right" }}
      // id="ROButt"
    >
      <div>
        <button
          className="flexfull"
          id="ROButt"
          onClick={handleClick}
          style={{ display: "flex", justifyContent: "right" }}
        >
          Find New Opponent
        </button>
      </div>
      <br />
      <br />
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
            style={{ width: "200px", height: "200px" }}
            // className="flexaround"
          />
          {randomMoves.length > 0 && (
            <div>
              <h3 id="MovesTitle">MOVES:</h3>
              <ol>
                {randomMoves.length > 0 &&
                  randomMoves[0].split(", ").map((move, index) => (
                    <li id="OpMoveList" key={index}>
                      {move}
                    </li>
                  ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RandomizedOpponentButton;
