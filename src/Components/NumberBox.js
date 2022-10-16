import Button from "./Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNumb,
  setVisibleNum,
  looseScore,
  setHighscore,
  setMsg,
} from "../redux/slices/rndSlice";

const NumberBox = (props) => {
  const dispatch = useDispatch();
  const nnum = useSelector((state) => state.rndSlice.num);
  const score = useSelector((state) => state.rndSlice.score);

  const check = () => {
    if (nnum == props.randomNum) {
      dispatch(setVisibleNum(nnum));
      dispatch(setHighscore(score));

      props.setDisabled(true);
    } else {
      dispatch(looseScore());

      if (score === 1) {
        props.setDisabled(true);
      }
    }
  };

  const onChangeInput = (e) => {
    dispatch(setNumb(e.target.value));
  };

  const onCheckClick = () => {
    if (nnum > 0 && nnum < 21) {
      check();
      props.showMessage();
    } else {
      dispatch(setMsg("numero non valido"));
    }
  };

  return (
    <section className="left">
      <input
        value={nnum}
        onChange={onChangeInput}
        type="number"
        className="guess"
      />
      <Button
        dsb={props.disabled}
        click={onCheckClick}
        text={"Check!"}
        style={"btn"}
      />
    </section>
  );
};

export default NumberBox;
