import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BattlePage from "./Components/BattlePages/BattlePage";
import Nav from "./Nav";
import Leaderboard from "./Components/SelectionPage/Leaderboard";
import Pokexamp4 from "./Assets/Pokexamp4.png";
// import Pokexamp from "./Assets/Pokexamp.png";
import HomePage from "./Components/SelectionPage/HomePage";
import Footer from "./Components/Footer";
import Pokedome from "./Components/Pokedome";
import AppProvider from "./Components/Context/AppProvider";

function App() {
  return (
    <AppProvider>
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
            <div id="Mtitle">
              <Pokedome />
            </div>
          </div>
        </header>

        <div className="background-container" style={{ zIndex: -2000 }}></div>

        {/* <SelectionPage /> */}
        {/* <BattlePage /> */}

        <div>
          {" "}
          {/* //add begin button home path, change selection path */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/battle" element={<BattlePage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
