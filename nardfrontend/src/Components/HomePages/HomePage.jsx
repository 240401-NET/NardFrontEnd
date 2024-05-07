// import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [fadeIn2, setFadeIn2] = useState(false);
  const [fadeIn3, setFadeIn3] = useState(false);
  const [fadeIn4, setFadeIn4] = useState(false);
  const [fadeIn5, setFadeIn5] = useState(false);

  useEffect(() => {
    setFadeIn2(true);
  }, []);

  useEffect(() => {
    setFadeIn3(true);
  }, []);

  useEffect(() => {
    setFadeIn4(true);
  }, []);

  useEffect(() => {
    setFadeIn5(true);
  }, []);

  const fadeInStyle2 = {
    opacity: fadeIn2 ? 1 : 0,
    transition: "opacity 2000ms linear",
  };

  const fadeInStyle3 = {
    opacity: fadeIn3 ? 1 : 0,
    transition: "opacity 4000ms linear",
  };

  const fadeInStyle4 = {
    opacity: fadeIn4 ? 1 : 0,
    transition: "opacity 6000ms linear",
  };

  const fadeInStyle5 = {
    opacity: fadeIn5 ? 1 : 0,
    transition: "opacity 8000ms linear",
  };

  return (
    <>
      <div style={fadeInStyle2} id="Welcome">
        Get Ready To Enter
      </div>

      <div style={fadeInStyle3} id="Welcome2">
        The Battle Arena To
      </div>

      <div style={fadeInStyle4} id="Welcome3">
        Fight For Your
      </div>

      <div style={fadeInStyle5} id="Welcome4">
        Place On The Leaderboard
      </div>
      <div id="EASpace">
        <NavLink to="/battle">
          <button id="EAButt">Enter Arena</button>
        </NavLink>
      </div>
    </>
  );
}

export default HomePage;
