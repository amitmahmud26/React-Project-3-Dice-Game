import React, { useState } from "react";
import "./GamePlay.css";
import Rules from "./Rules";

const GamePlay = () => {
  const arrNums = [1, 2, 3, 4, 5, 6];
  const [showRules, setShowRules] = useState(false);
  const [showButton, setShowButton] = useState("Show ");
  const handleShowRules = () => {
    setShowRules((prev) => !prev);
    showRules ? setShowButton("Show ") : setShowButton("Hide ");
  };
  const [selectedNumber, setSelectedNumber] = useState(-999);
  // console.log(selectedNumber);
  const [diceNum, setDiceNum] = useState("1");
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 6) + 1);
  const [totalScore, setTotalScore] = useState(0);
  const [noSelectionErrorMessage, setNoSelectionErrorMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const handleRandomNum = () => {
    if(selectedNumber === -999){
      setNoSelectionErrorMessage("Select a number first!")
      setErrorMessage("")
      setSuccessMessage("")
      return;
    }
    const newRandomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(newRandomNumber);
    setRandomNum(newRandomNumber);
    setDiceNum(newRandomNumber);
    if (selectedNumber == newRandomNumber) {
      setTotalScore((prev) => (prev || 0) + newRandomNumber);
      console.log("okkkk - matched!");
      setSelectedNumber(-999);
      console.log(newRandomNumber)
      setSuccessMessage("Your guess is correct! You got " + newRandomNumber +" points.")
      setErrorMessage("")
      setNoSelectionErrorMessage("")
    } else {
      setTotalScore((prev) => (prev || 0) - 2);
      setSelectedNumber(-999);
      setErrorMessage("Your guess is incorrect! You got -2 points");
      setSuccessMessage("")
      setNoSelectionErrorMessage("")
    }
    // console.log("totalScore: " + totalScore)
    // if (selectedNumber === -999) {
    // }
  };
  const handleResetButton =() =>{
    setTotalScore(0);
  }
  return (
    <div className="game-play-parent">
      <div className="game-play-container">
        <div className="upper">
          <div className="upper-left">
            <label htmlFor="">{totalScore}</label>
            <h3>Total Score</h3>
          </div>
          <div className="upper-right">
            <p style={{ color: "red" }}>{errorMessage}</p>
            <p style={{ color: "red" }}>{noSelectionErrorMessage}</p>
            <p style={{ color: "green" }}>{successMessage}</p>
            <div className="dice-num">
              {arrNums.map((value, i) => (
                <p
                  className={selectedNumber == value ? "selected" : ""}
                  onClick={() => setSelectedNumber(value)}
                  key={i}
                >
                  {value}
                </p>
              ))}
            </div>
            <h3>Select Number</h3>
          </div>
        </div>
        <div className="body">
          <img
            onClick={handleRandomNum}
            src={`/images/dice_${diceNum}.png`}
            alt="dice"
          />
          <p>Click on Dice to roll</p>
          <div onClick={handleResetButton} className="reset-btn">Reset Button</div>
          <div onClick={handleShowRules} className="show-rules-btn">
            {showButton} Rules
          </div>
        </div>
        {showRules ? <Rules /> : ""}
      </div>
    </div>
  );
};

export default GamePlay;
