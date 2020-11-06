import React, { useEffect, useState } from "react";
import {
  squareArrCreator,
  squareCreationFunc,
  playFunc,
} from "../../../services";

const GameSquare = ({ currentMode, play }) => {
  const [mode, setMode] = useState(currentMode);
  const [squareData, setSquareData] = useState([]);
  const [idIntarval, setIdIntarval] = useState(null);
  const [idTimeOut, setIdTimeOut] = useState(null);

  //console.log("idTimeOut", idTimeOut);

  useEffect(() => {
    setMode(currentMode);
  }, [currentMode]);

  useEffect(() => {
    const squareArr = squareArrCreator(mode.field);
    setSquareData(squareArr);
    clearTimeout(idTimeOut);
    clearInterval(idIntarval);
  }, [mode]);

  const square = squareCreationFunc({
    squareData,
    setSquareData,
    count: mode.field,
  });
  useEffect(() => {
    !play && clearInterval(idIntarval) && clearTimeout(idTimeOut);
    play &&
      setIdIntarval(
        setInterval(playFunc, mode.delay, {
          count: mode.field,
          setSquareData,
          delay: mode.delay,
          idTimeOut,
          setIdTimeOut,
        })
      );
  }, [play]);

  return <div>{square}</div>;
};

export default GameSquare;
