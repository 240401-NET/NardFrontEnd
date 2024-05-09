import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BattlePage from "./Components/BattlePages/BattlePage";
import Nav from "./Nav";
import Leaderboard from "./Components/HomePages/Leaderboard";
import Pokexamp4 from "./Assets/Pokexamp4.png";
import HomePage from "./Components/HomePages/HomePage";
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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              opacity: ".8",
            }}
          >
            <div id="Mtitle">
              <Pokedome />
            </div>
          </div>
        </header>

        <div className="background-container" style={{ zIndex: -2000 }}></div>

        <div className="body">
          {" "}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/battle" element={<BattlePage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
