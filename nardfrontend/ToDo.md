The move buttons should fetch to Update battle with the chosen move name, a random move from the opponent and the Battle ID.
The response will allow a BattleMessage of
If (priority == 1) {
const fasterPokemon = {selectedPokemon}
const slowerPokemon = {randomPokemon}
}
else (priority == 2) {
const fasterPokemon = {randomPokemon}
const slowerPokemon = {selectedPokemon}
}
{fasterPokemon} struck first with {chosenMoveName}
if (Move1Hit == true) {slowerPokemon} is left with {P2HP}
if ({P2HP} <= 0){
{slowerPokeon} is forced to retire.
fetch to deleteBattle
} else {
{slowerPokemon} is still in it.
}
else ( but missed. {slowerPokemon} remains at P2HP.)

{slowerPokemon} strikes back with {RandomOpponentMove}
if (Move2Hit == true) A direct Hit {fasterPokemon} is left with {P1HP}
if ({P1HP} <= 0){
{fasterPokemon} is forced to retire.
fetch to
} else {
{fasterPokemon} lives on.
}

else {(but did not connect. {fasterPokemon}) stays at {P1HP}}

Begin Battle Button. should fetch to createBattle endpoint and from that info the pokemons names, HP, and will be displayed.

Modal triggered to open with the end of the battle, that also updates Leaderboard results, and clears the previous battle with a hard refresh

remove buttons need to go after confirmation \*

1. display messages -
2. fix footer \*
3. results modal that resets data and updates leaderboard. -
4. show messages and buttons over video -
5. clean & refactor code -
6. Final Music

import React, { useState, useEffect } from "react";

function TypingText() {
const [displayText, setDisplayText] = useState(""); // State to manage the displayed text
const textToType = "Hello, world!"; // Text to be displayed

useEffect(() => {
let currentIndex = 0;
const typingInterval = setInterval(() => {
if (currentIndex <= textToType.length) {
setDisplayText(textToType.slice(0, currentIndex));
currentIndex++;
} else {
clearInterval(typingInterval);
}
}, 100); // Typing speed: 100 milliseconds per character

    return () => clearInterval(typingInterval); // Cleanup function

}, []); // Empty dependency array to run only once on component mount

return (

<div>
<p>{displayText}</p>
</div>
);
}

export default TypingText;
