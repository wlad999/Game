import React, { useEffect, useState } from "react";
import {
  defaultArrCreator,
  squareCreationFunc,
  playFunc,
} from "../../../services";

const GameSquare = ({ currentMode, play, setWinner }) => {
  const [mode, setMode] = useState(currentMode);
  const [squareData, setSquareData] = useState([]);
  const [idIntarval, setIdIntarval] = useState(null);
  const [idTimeOut, setIdTimeOut] = useState(null);
  const [showSquare, setShowSquare] = useState(null);

  useEffect(() => {
    setMode(currentMode);
  }, [currentMode]);

  useEffect(() => {
    const squareArr = defaultArrCreator(mode.field);
    setSquareData(squareArr);
    clearTimeout(idTimeOut);
    clearInterval(idIntarval);
  }, [mode]);

  useEffect(() => {
    const square = squareCreationFunc({
      squareData,
      setSquareData,
      count: mode.field,
      setWinner,
    });
    setShowSquare(square);
  }, [squareData]);

  useEffect(() => {
    if (!play) {
      clearInterval(idIntarval);
      clearTimeout(idTimeOut);
    }
    if (play) {
      setWinner(null);
      const squareArr = defaultArrCreator(mode.field);
      setSquareData(squareArr);
    }

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

  return <div>{showSquare}</div>;
};

export default GameSquare;
