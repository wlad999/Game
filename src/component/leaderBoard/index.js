import React from "react";
import "./index.css";

const LeaderBoard = ({ list }) => {
  return (
    <div className="leaderFieldContainer">
      <span>Leader Board</span>
      <ul>{list ? list : "Some problem with getting leaders list"}</ul>
    </div>
  );
};

export default LeaderBoard;
