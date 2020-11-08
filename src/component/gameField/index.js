import React, { useEffect, useState } from "react";
import "./index.css";
import GameSquare from "./gameSquare";
import Control from "./control";
import { dataToSendFunc, selectModeFunc } from "../../services";

const GameField = ({ gameMode, setLeaderList }) => {
  const [currentMode, setCurrentMode] = useState({
    level: "easyMode",
    ...gameMode.easyMode,
  });
  const [name, setName] = useState("");
  const [play, setPlay] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    winner && setPlay(false);

    const data = dataToSendFunc({ winner, name });

    winner &&
      fetch("https://starnavi-frontend-test-task.herokuapp.com/winners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
        .then((data) => setLeaderList(data))
        .catch(console.log("Some problem with getting leaders list"));
  }, [winner]);

  const setPropsPlay = () => {
    setPlay((play) => !play);
  };
  const setPlayerName = (e) => {
    if (play || winner) {
      return null;
    }
    return setName(e.target.value);
  };

  const selectMode = selectModeFunc({ gameMode, setCurrentMode });

  return (
    <div className="gameFieldContainer">
      <Control
        renderMode={selectMode}
        setPlayToggle={setPropsPlay}
        play={play}
        winner={winner}
        name={name}
        setName={setPlayerName}
      />
      <GameSquare currentMode={currentMode} play={play} setWinner={setWinner} />
    </div>
  );
};

export default GameField;
