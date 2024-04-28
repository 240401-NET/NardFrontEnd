import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BattlePage from "./Components/BattlePages/BattlePage";
import Nav from "./Nav";
import Leaderboard from "./Components/SelectionPage/Leaderboard";
import Pokexamp from "./Assets/Pokexamp.png";
import SelectionPage from "./Components/SelectionPage/SelectionPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <header
        id=""
        className="App-header"
        style={{ backgroundImage: `url(${Pokexamp})` }}
      >
        <p id="Mtitle">WELCOME TO THE POKEDOME!</p>
      </header>
      {/* <>
        <SelectionPage />
        <BattlePage />
      </> */}
      <div>
        <Routes>
          <Route path="/" element={<SelectionPage />} />
          <Route path="/battle" element={<BattlePage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
