import shortid from "shortid";

export function leaderListFunc({ leadersArr }) {
  const leaderList =
    leadersArr.length &&
    [...leadersArr].reverse().map((el) => (
      <li key={shortid()} className="line">
        <span className="winner">{el.winner}</span>
        {el.date}
      </li>
    ));
  return leaderList;
}
