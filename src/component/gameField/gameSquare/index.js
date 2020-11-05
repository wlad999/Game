import React, { useEffect, useState } from "react";
import {
  squareArrCreator,
  squareCreationFunc,
  playFunc,
} from "../../../services";

const GameSquare = ({ currentMode, play }) => {
  const [count, setCount] = useState(2);
  const [squareData, setSquareData] = useState([]);

  //  useEffect(() => {
  //    const { field: setCarentCount } = currentMode;
  //    setCount(setCarentCount);
  //  }, [currentMode]);

  useEffect(() => {
    const squareArr = squareArrCreator(count);
    setSquareData(squareArr);
  }, [count]);

  const square = squareCreationFunc({ squareData, setSquareData, count });
  useEffect(() => {
    play && playFunc({ count, squareData, setSquareData });
  }, [play]);

  return <div>{square}</div>;
};

export default GameSquare;
