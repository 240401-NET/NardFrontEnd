import { PokemonContext } from "../Context/PokemonContext";
import { BattleContext } from "../Context/BattleContext";
import React, { useState, useContext, useEffect, useRef } from "react";
import ClearDataButton from "../BattlePages/ClearDataButton";
import PokeVid from "../../Assets/PokeVid.mp4";

function StartBattleMusicButton() {
  const {
    selectedPokemon,
    randomPokemon,
    selectedMoves,
    randomMoves,
    createdBattle,
    setCreatedBattle,
  } = useContext(PokemonContext);

  const { battleInfo, setBattleInfo } = useContext(BattleContext);

  const videoRef = useRef(null); // Ref to store the video element

  const playVideo = () => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000); // Delay play() method call by 1 second (adjust as needed)
  };

  const audioRef = useRef(null); // Ref to store the audio element

  const playBattleMusic = () => {
    const randomIndex = Math.floor(Math.random() * 2);

    const musicFiles = [
      "http://localhost:5019/audio/BattleMusic-1.mp3",
      "http://localhost:5019/audio/ReadyFight-1.mp3",
    ];

    const audio = new Audio(musicFiles[randomIndex]);
    audio.loop = true;
    audio.play();
    audioRef.current = audio;
    // return audio;
  };

  const pauseBattleMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the audio
    }
  };

  const handleVideoEnd = () => {
    // Hide the video when it ends
    videoRef.current.style.display = "none";
  };

  const handleBeginBattle = () => {
    console.log(selectedMoves);
    if (selectedMoves && randomMoves && randomPokemon) {
      // Construct the URL for creating the battle
      const moves1string = selectedMoves;
      const moves2string = randomMoves;
      const url = `http://localhost:5019/Battle/createBattle/${selectedPokemon}/${randomPokemon.id}/${moves1string}/${moves2string}`;

      fetch(url, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create battle");
          }
          return response.text();
        })
        .then((data) => {
          setCreatedBattle(data); // Store the created battle data
          console.log(data); // Handle any further actions with the created battle data
          console.log("FANCY", JSON.parse(data));

          setBattleInfo(JSON.parse(data));
          // console.log(battleInfo.battleId);
          // const randomIndex = Math.floor(
          //   Math.random() * battleInfo.p1Moves.Length
          // );
          // console.log(battleInfo.p1Moves[randomIndex]);
          playBattleMusic();
        })
        .catch((error) => {
          console.log(
            "Failed to create battle. Please try again later.",
            error
          );
        });
    } else {
      alert("Please select opponent before starting the battle.");
    }
  };

  useEffect(() => {
    console.log(createdBattle);
  }, [createdBattle]);

  const startBattle = () => {
    playVideo();
    handleBeginBattle();
  };

  // const startMessage = "${createdBattle}";

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <Link to="/battle"> */}
      <div>
        <span style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            id="BBButton"
            type="button"
            onClick={startBattle}
            className="btn btn-primary"
            style={{ overflow: "auto" }}
          >
            BEGIN BATTLE
          </button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              id="PauseButton"
              type="button"
              onClick={pauseBattleMusic}
              className="btn btn-secondary ml-2"
            >
              Pause Music
            </button>
          </div>
        </span>
      </div>
      <div id="video-container">
        <video
          ref={videoRef}
          id="myVideo"
          autoPlay
          muted
          onEnded={handleVideoEnd}
          // style={{ display: "none" }}
        >
          <source src={PokeVid} type="video/mp4" />
        </video>
      </div>

      {/* </Link> */}
      {/* <p>{createdBattle}</p> */}
      {/*Display any other relevant information about the created battle*/}
    </div>
  );
}

export default StartBattleMusicButton;
