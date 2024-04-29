import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BattlePage from "./Components/BattlePages/BattlePage";
import Nav from "./Nav";
import Leaderboard from "./Components/SelectionPage/Leaderboard";
import Pokexamp2 from "./Assets/Pokexamp2.png";
// import Pokexamp from "./Assets/Pokexamp.png";
import SelectionPage from "./Components/SelectionPage/SelectionPage";
// import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <header>
        <div
          id="bitty"
          className="App-header"
          style={{
            backgroundImage: `url(${Pokexamp2})`,
            backgroundSize: "cover", // Set backgroundSize to cover
            backgroundRepeat: "no-repeat", // Prevent background from repeating
            backgroundPosition: "center", // Center the background image
          }}
        >
          <p id="Mtitle">WELCOME TO THE POKEDOME!</p>
        </div>
      </header>
      {/* <>
        <SelectionPage />
        <BattlePage />
      </> */}

      <div>{/* <Footer /> */}</div>
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
