import React from "react";

function BattleList() {
  const [battleList, setBattleList] = useState([]);

  useEffect(() => {
    fetch("/getBattles")
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((execption) => {
        console.log(exception);
      });
  }, []);
  return (
    <>
      <div>
        <h2>Battles</h2>
        <ul>
          {battleList.map((battle) => (
            <>
              <li key={battle.id}>{battle.id}</li>
              <li>{battle.battleStatus}</li>
              <li>{battle.battleWinner}</li>
              <li>{battle.battleStatus}</li>
              <li>{battle.battleStatus}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
