import React, { useEffect, useState } from "react";
import GameField from "./component/gameField";
import LeaderBoard from "./component/leaderBoard";
import { leaderListFunc } from "./services";
import "./App.css";

const defaultMode = {
  easyMode: { field: 5, delay: 2000 },
  normalMode: { field: 10, delay: 1000 },
  hardMode: { field: 15, delay: 900 },
};

function App() {
  const [gameMode, setGameMode] = useState(defaultMode);
  const [leadersArr, setLeaderList] = useState([]);

  useEffect(() => {
    fetch("https://starnavi-frontend-test-task.herokuapp.com/winners")
      .then((data) => data.json())
      .then((json) => setLeaderList(json))
      .catch(console.log("Some problem with getting leaders list"));
  }, []);

  useEffect(() => {
    fetch("https://starnavi-frontend-test-task.herokuapp.com/game-settings")
      .then((data) => data.json())
      .then((json) => setGameMode(json))
      .catch(setGameMode(defaultMode));
  }, []);

  const leadersList = leaderListFunc({ leadersArr });

  return (
    <div className="App">
      <GameField gameMode={gameMode} setLeaderList={setLeaderList} />
      <LeaderBoard list={leadersList} />
    </div>
  );
}

export default App;
