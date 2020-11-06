import React, { useState } from "react";
import "./index.css";
import shortid from "shortid";
import GameSquare from "./gameSquare";
import Control from "./control";

const GameField = ({ gameMode }) => {
  const [currentMode, setCurrentMode] = useState(gameMode.easyMode);
  const [play, setPlay] = useState(false);
  const setPropsPlay = () => {
    setPlay((play) => !play);
  };

  const modeList = Object.keys(gameMode);

  const renderMode = modeList.map((level) => (
    <div
      key={shortid()}
      onClick={() => setCurrentMode(gameMode[level])}
      className="mode"
    >
      {level} <span>field:{gameMode[level].field}</span>
      <span> delay:{gameMode[level].delay}</span>
    </div>
  ));

  return (
    <div className="gameFieldContainer">
      <Control renderMode={renderMode} setPlayToggle={setPropsPlay} />
      <GameSquare currentMode={currentMode} play={play} />
    </div>
  );
};

export default GameField;
