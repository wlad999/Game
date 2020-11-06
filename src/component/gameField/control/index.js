import React, { useState } from "react";
import "./index.css";

const Control = ({ renderMode, setPlayToggle }) => {
  return (
    <div className="control">
      <div className="modeList">{renderMode}</div>
      <button onClick={setPlayToggle}>PLAY</button>
    </div>
  );
};

export default Control;
