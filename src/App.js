import { useEffect, useState } from "react";
import "./App.css";
import GameField from "./component/gameField";
import LeaderBoard from "./component/leaderBoard";

const defaultMode = {
  easyMode: { field: 5, delay: 2000 },
  normalMode: { field: 10, delay: 1000 },
  hardMode: { field: 15, delay: 900 },
};

function App() {
  const [gameMode, setGameMode] = useState(defaultMode);
  useEffect(() => {
    fetch("https://starnavi-frontend-test-task.herokuapp.com/game-settings")
      .then((data) => data.json())
      .then((json) => setGameMode(json))
      .catch(setGameMode(defaultMode));
  }, []);
  return (
    <div className="App">
      <GameField gameMode={gameMode} />
      <LeaderBoard />
    </div>
  );
}

export default App;
