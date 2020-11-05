import { purple } from "@material-ui/core/colors";
import shortid from "shortid";

export function squareArrCreator(count) {
  const oneLineArr = (lineIdx) =>
    new Array(count).fill().map((_, squareIdx) => ({
      id: lineIdx * count + 1 + squareIdx,
      color: null,
    }));

  return new Array(count).fill().map((_, lineIdx) => oneLineArr(lineIdx));
}

export function squareCreationFunc({ squareData, setSquareData, count }) {
  return squareData.map((line) => {
    return (
      <div
        style={{ display: "flex", justifyContent: "center" }}
        key={shortid()}
      >
        {line.map((el, idx) => {
          return (
            <div
              style={{
                width: `calc(40vw/${count})`,
                height: `calc(40vw/${count})`,
                outline: "1px solid black",
                background: `${el.color}`,
                cursor: "pointer",
              }}
              key={shortid()}
              onClick={() =>
                clickHandler({ id: el.id, squareData, setSquareData })
              }
            >
              {el.id}
            </div>
          );
        })}
      </div>
    );
  });
}

export function clickHandler({ id, squareData, setSquareData }) {
  const newSquareData = squareData.map((line) =>
    line.map((el) => {
      if (el.id === id) {
        return { ...el, color: "coral" };
      }
      return el;
    })
  );
  setSquareData(newSquareData);
}

export function playFunc({ count, squareData, setSquareData }) {
  console.log("playFunc");
  const randomNum = Math.ceil(Math.random() * (count * count));

  if (squareData.length) {
    const plaingSquare = squareData.map((line) =>
      line.map((el) => {
        if (el.id === randomNum) {
          return { ...el, color: "purple" };
        }
        return el;
      })
    );
    setSquareData(plaingSquare);
    console.log("plaingSquare", plaingSquare);
  }

  //  setSquareData(plaingSquare);
  console.log("squareData", squareData.length);
}
