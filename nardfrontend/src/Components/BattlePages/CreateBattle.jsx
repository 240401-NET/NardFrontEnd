async function createBattle(pokemonId1, pokemonId2, moves1, moves2) {
  // Create Battle
  const response = await fetch(
    `http://localhost:5019/Battle/createBattle/${pokemonId1}/${pokemonId2}/${moves1.join()}/${moves2.join()}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  console.log(data); // Output: Battle id {battleId}, Pokemon 1 stat block is {stats}, Pokemon 2 stat block is {stats}
}

export default createBattle;
