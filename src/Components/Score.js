import { useState } from "react";
import { useSelector } from "react-redux";

const Score = (props) => {
  const highscore = useSelector((state) => state.rndSlice.highscore);
  const score = useSelector((state) => state.rndSlice.score);

  return (
    <>
      <p className="label-score">
        💯 Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{highscore}</span>
      </p>
    </>
  );
};

export default Score;
