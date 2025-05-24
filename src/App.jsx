import { useState } from "react";
import "./App.css";
import StartGame from "./assets/Components/StartGame/StartGame";
import GamePlay from "./assets/Components/GamePlay/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    console.log("oihaifha;f")
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
