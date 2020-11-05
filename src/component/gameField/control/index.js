import React, { useState } from "react";
import "./index.css";

const Control = ({ renderMode, setPlay }) => {
  return (
    <div className="control">
      <div className="modeList">{renderMode}</div>
      <button onClick={() => setPlay(true)}>PLAY</button>
    </div>
  );
};

export default Control;
