import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BattlePage from "./Components/BattlePages/BattlePage";
import Nav from "./Nav";
import Leaderboard from "./Components/SelectionPage/Leaderboard";
import Pokexamp4 from "./Assets/Pokexamp4.png";
// import Pokexamp from "./Assets/Pokexamp.png";
import SelectionPage from "./Components/SelectionPage/SelectionPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <header>
        <div
          id="bitty"
          className="App-header"
          style={{
            backgroundImage: `url(${Pokexamp4})`,
            backgroundSize: "cover", // Set backgroundSize to cover
            backgroundRepeat: "no-repeat", // Prevent background from repeating
            backgroundPosition: "center", // Center the background image
            opacity: ".85",
          }}
        >
          <p id="Mtitle" className="typed">
            WELCOME TO THE POKEDOME!
          </p>
        </div>
      </header>
      <div className="background-container" style={{ zIndex: -2000 }}></div>
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

      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
