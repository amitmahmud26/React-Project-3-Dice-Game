import React from "react";
import "./StartGame.css";
const StartGame = ({toggle}) => {
  return (
    <div className="parent">
      <div className="container">
        <div className="left-img">
          <img src="/images/dices.png" alt="dices" />
        </div>
        <div className="right-btn">
          <h1>DICE GAME</h1>
          <button onClick={toggle} className="play-now-btn">Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
