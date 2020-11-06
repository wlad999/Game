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
  //console.log("squareCreationFunc", squareData);
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
      if (el.id === id && el.color === "#42D8E8") {
        return { ...el, color: "#00E871" };
      }
      return el;
    })
  );
  setSquareData(newSquareData);
}

export function playFunc({
  count,
  setSquareData,
  delay,
  idTimeOut,
  setIdTimeOut,
}) {
  let randomNum = Math.ceil(Math.random() * (count * count));
  //console.log("START FUNC");

  setSquareData((squareData) =>
    squareData.map((line) =>
      line.map((el) => {
        //if (el.color && el.id < count * count) {
        //  randomNum = randomNum + 1;
        //}
        if (el.id === randomNum && !el.color) {
          return { ...el, color: "#42D8E8" };
        }
        return el;
      })
    )
  );
  setIdTimeOut(
    setTimeout(() => {
      setSquareData((squareData) =>
        squareData.map((line) =>
          line.map((el) => {
            if (el.id === randomNum && el.color !== "#00E871") {
              return { ...el, color: "#E85A5F" };
            }
            return el;
          })
        )
      );
      clearTimeout(idTimeOut);
    }, delay)
  );
}
