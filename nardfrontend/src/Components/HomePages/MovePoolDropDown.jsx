import React, { useState, useEffect, useContext, useRef } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import { BattleContext } from "../Context/BattleContext";
import StartBattleMusicButton from "./StartBattleMusicButton";

function MovePoolDropDown({ selectedPokemon, pokemonList, onSelectMoves }) {
  const { selectedMoves, setSelectedMoves, open, setOpen, randomMoves,randomPokemon, pokemonInfo, setPokemonInfo, setRandomPokemon } =
    useContext(PokemonContext);
  const { battleInfo, setBattleInfo, updatedBattleData, setUpdatedBattleData, setWinnerFlag } =
    useContext(BattleContext);
  const [confirmButtonText, setConfirmButtonText] =
    useState("Confirm Selection");
  const [confirmed, setConfirmed] = useState(false);



  useEffect(() => {
    setSelectedMoves([]);
    setConfirmed(false);
  }, [selectedPokemon]);

  const handleMoveSelect = async (move) => {
    if (!selectedMoves.includes(move)) {
      if (selectedMoves.length < 4) {
        setSelectedMoves([...selectedMoves, move]);
      } else {
        alert("You can select only 4 moves.");
      }
    } else if (confirmed) {
      alert("Moves can not be changed after confirmation.");
    } else {
      alert("Move already selected.");
    }
  };

  const randomOpponentMove = () => {
    console.log(randomMoves ?? "dog");
    const splittedRandomMoves = randomMoves.split(",");
    if (splittedRandomMoves.length > 0) {
      let randomIndex = Math.floor(Math.random() * splittedRandomMoves.length);
      return splittedRandomMoves[randomIndex];
    } else {
      
      return null;
    }
  };

  const handleClick = () => {
    setOpen(!open); // Toggle the state of 'open'
  };

  const removeMove = (move) => {
    setSelectedMoves(
      selectedMoves.filter((selectedMove) => selectedMove !== move)
    );
  };

  const handleConfirm = () => {
    if (selectedMoves.length !== 4) {
      alert("Please select exactly 4 moves before confirming.");
    } else {
      onSelectMoves(selectedMoves);
      setConfirmed(true);
      setOpen(false); // Close the dropdown after confirming moves
      setConfirmButtonText("Confirmed!");
    }
  };

  const updateBattle = async (battleId, pokemon1Move, pokemon2Move) => {
    const url = `http://localhost:5019/Battle/updateBattle/${battleId}/${pokemon1Move}/${pokemon2Move}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
      });

      const data = await response.json();
      setUpdatedBattleData(data);
      getBattleById(battleId);
      console.log(battleInfo);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  // Method to get battle by battle id from the backend and use it to update battleInfo
  const getBattleById = async (battleId) => {
    const url = `http://localhost:5019/Battle/getBattle/${battleId}`;
  
    try {
      const response = await fetch(url);
      var data = await response.text();
      data = JSON.parse(data);
      console.log(data);
      
      // Extract p1StatBlock and p2StatBlock from data
      const p1StatBlock = data.p1StatBlock;
      const p2StatBlock = data.p2StatBlock;
      console.log(data.p1StatBlock);
      if (pokemonInfo && randomPokemon) {
        let tempSelectedPokemon = { ...pokemonInfo };
        let tempRandomPokemon = { ...randomPokemon };
        
  
        // replace the tempSelectedPokemon and tempRandomPokemon stats with the p1StatBlock and p2StatBlock respectively
        tempSelectedPokemon.hp = p1StatBlock[0];
        tempRandomPokemon.hp = p2StatBlock[0];
        var splitTempHp = tempSelectedPokemon.hp.split(":");
        var splitTempHp2 = tempRandomPokemon.hp.split(":");

        if(splitTempHp[1] <= 0) {
          setWinnerFlag(2);
        }
        else if (splitTempHp2[1] <= 0){
          setWinnerFlag(1);
        }
        console.log (splitTempHp[1]);
        console.log (splitTempHp2[1]);
        tempSelectedPokemon.hp = splitTempHp[1];
        tempRandomPokemon.hp = splitTempHp2[1];
        setPokemonInfo(tempSelectedPokemon);
        setRandomPokemon(tempRandomPokemon);
      }
      else {
        console.log("Pokemon info or random pokemon is null");
      }
  
      // Update battleInfo with the data received from the backend
      setBattleInfo(data);
      console.log(battleInfo);
    } catch (error) {
      alert(`Error: this is line 117 ${error.message}`);
    }
  };

  return (
    <>
      <div
        className="dropdown"
        style={{ position: "relative", maxHeight: "200px" }}
      >
        <button onClick={handleClick} id="MovePoolDrop">
          {open ? "Close Menu" : "Select Moves"}
        </button>
        <div>
          {!confirmed && (
            <button id="ConfirmMovesButton" onClick={handleConfirm}>
              {confirmButtonText}
            </button>
          )}
        </div>
        {open && (
          <ul
            className="menu"
            style={{
              position: "absolute",
              top: "-100%",
              right: "45%",
              maxHeight: "560px",
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            {(
              pokemonList.find((pokemon) => pokemon.name === selectedPokemon)
                ?.movePool || []
            )
              // this can be cleaned up
              .map((move, index) => (
                <li className="menu-item" key={index}>
                  <button
                    onClick={() => handleMoveSelect(move)}
                    // disabled={confirmed}
                  >
                    {move}
                  </button>
                </li>
              ))}
          </ul>
        )}
        <div>
          <h2>Selected Moves:</h2>
          <ol className="flex">
            {selectedMoves.map((move, index) => (
              <li key={index}>
                <button
                  id="RemoveButt"
                  onClick={() => removeMove(move)}
                  disabled={confirmed}
                >
                  Remove
                </button>{" "}
                <button
                  id="moves-container"
                  onClick={() =>
                    updateBattle(
                      battleInfo.battleId,
                      selectedMoves[index],
                      randomOpponentMove()
                    )
                  } //disabled={confirmed}
                 >
                  {" "}
                  {move}
                 
                </button>
              </li>
            ))}
          </ol>
        </div>

        {confirmed && (
          <div>
            <StartBattleMusicButton />
          </div>
        )}
      </div>
    </>
  );
}

export default MovePoolDropDown;
