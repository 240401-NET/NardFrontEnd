import React, { useEffect, useState } from "react";

function FadeInElement() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const fadeInStyle = {
    opacity: fadeIn ? 1 : 0,
    transition: "opacity 4000ms linear",
  };

  return <div style={fadeInStyle}>WELCOME TO THE POKEDOME</div>;
}

export default FadeInElement;
