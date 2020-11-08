import shortid from "shortid";

export function defaultArrCreator(count) {
  const oneLineArr = (lineIdx) =>
    new Array(count).fill().map((_, squareIdx) => ({
      id: lineIdx * count + 1 + squareIdx,
      color: null,
    }));

  return new Array(count).fill().map((_, lineIdx) => oneLineArr(lineIdx));
}

export function squareCreationFunc({
  squareData,
  setSquareData,
  count,
  setWinner,
}) {
  let compWin = 0;
  let playerWin = 0;
  let totalNumber = count * count;
  let winner = null;

  return squareData.map((line) => {
    return (
      <div
        style={{ display: "flex", justifyContent: "center" }}
        key={shortid()}
      >
        {line.map((el) => {
          if (el.color === "#00E871") {
            playerWin = playerWin + 1;
          }
          if (el.color === "#E85A5F") {
            compWin = compWin + 1;
          }
          if (playerWin / totalNumber > 0.5) {
            winner = "User";
            setWinner(winner);
          }
          if (compWin / totalNumber > 0.5) {
            winner = "Computer";
            setWinner(winner);
          }

          return (
            <div
              style={{
                width: `calc(36vw/${count})`,
                height: `calc(36vw/${count})`,
                outline: "2px solid #EFEFF1",
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

export function randomNumCreator({ squareData, count }) {
  let num;
  while (!num && squareData.length) {
    let tryNum = Math.ceil(Math.random() * (count * count));

    squareData.map((line) =>
      line.map((el) => {
        if (el.id === tryNum && !el.color) {
          num = tryNum;
        }
      })
    );
  }

  return num;
}

export function playFunc({
  count,
  setSquareData,
  delay,
  idTimeOut,
  setIdTimeOut,
}) {
  let randomNum;
  setSquareData((squareData) => {
    randomNum = randomNumCreator({ squareData, count });

    //console.log("randomNum", randomNum);
    return squareData.map((line) =>
      line.map((el) => {
        if (el.id === randomNum) {
          //console.log("el", el.id);
          return { ...el, color: "#42D8E8" };
        }
        return el;
      })
    );
  });
  setIdTimeOut(
    setTimeout(() => {
      setSquareData((squareData) =>
        squareData.map((line) =>
          line.map((el) => {
            if (el.id === randomNum && el.color === "#42D8E8") {
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
