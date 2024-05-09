import { PokemonContext } from "../Context/PokemonContext";
import { BattleContext } from "../Context/BattleContext";
import React, { useState, useContext, useEffect, useRef } from "react";
import ClearDataButton from "../BattlePages/ClearDataButton";
import PokeVid from "../../Assets/PokeVid.mp4";

import TextDisplayer from "../BattlePages/TextDisplayer";

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

  const videoRef = useRef(null);

  const playVideo = () => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  };

  const audioRef = useRef(null);
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
  
  };

  const pauseBattleMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleVideoEnd = () => {
    videoRef.current.style.display = "none";
  };

  const handleBeginBattle = async () => {
    console.log(selectedMoves);
    if (selectedMoves && randomMoves && randomPokemon) {
      const moves1string = selectedMoves;
      const moves2string = randomMoves;
      const url = `http://localhost:5019/Battle/createBattle/${selectedPokemon}/${randomPokemon.id}/${moves1string}/${moves2string}`;

      await fetch(url, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create battle");
          }
          return response.text();
        })
        .then((data) => {
          setCreatedBattle(data); 
         

          setBattleInfo(JSON.parse(data));
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


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
      <div className="video-container">
        <video
          ref={videoRef}
          id="myVideo"
          autoPlay
          muted
          onEnded={handleVideoEnd}
        >
          <source src={PokeVid} type="video/mp4" />
        </video>
      </div>
      <div className="video-container"></div>
    </div>
  );
}

export default StartBattleMusicButton;
