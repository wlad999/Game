import shortid from "shortid";

export function dataToSendFunc({ winner, name }) {
  const newDate = new Date();
  const dateString = `${newDate
    .toLocaleTimeString()
    .slice(0, -3)}; ${newDate
    .toLocaleDateString()
    .slice(0, -8)} ${newDate.toLocaleString("en", {
    month: "long",
  })} ${newDate.getFullYear()}`;

  const data = {
    winner: name ? name.slice(0, 12) : winner,
    date: dateString,
  };
  return data;
}

export function selectModeFunc({ gameMode, setCurrentMode }) {
  const modeList = Object.keys(gameMode);

  const renderMode = (
    <select
      id="select"
      value="Pick game mode"
      onChange={(e) =>
        setCurrentMode({
          level: e.target.value,
          ...gameMode[e.target.value],
        })
      }
    >
      <option disabled style={{ display: "none" }}>
        Pick game mode
      </option>
      {modeList.map((level) => {
        return (
          <option value={level} key={shortid()}>
            {level}
          </option>
        );
      })}
    </select>
  );
  return renderMode;
}
