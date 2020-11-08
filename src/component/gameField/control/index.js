import React from "react";
import "./index.css";

const Control = ({
  renderMode,
  setPlayToggle,
  play,
  winner,
  name,
  setName,
}) => {
  return (
    <>
      <div className="control">
        <div className="modeList">{renderMode}</div>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e)}
        />
        <button onClick={setPlayToggle}>
          {play && !winner ? "STOP" : !play && !winner ? "PLAY" : "PLAY AGAIN"}
        </button>
      </div>
      {winner && <h2>{name ? name : winner} won</h2>}
    </>
  );
};

export default Control;
