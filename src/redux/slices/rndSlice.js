import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  num: "",
  visibleNum: "?",
  score: 20,
  highscore: 0,
  msg: "iniziamo...",
};
const rndSlice = createSlice({
  name: "rndSlice",
  initialState,
  reducers: {
    setNumb(state, action) {
      state.num = action.payload;
    },
    setVisibleNum(state, action) {
      state.visibleNum = action.payload;
    },
    looseScore(state) {
      state.score = state.score - 1;
    },
    refreshScore(state) {
      state.score = 20;
    },
    setHighscore(state, action) {
      state.highscore = action.payload;
    },
    setMsg(state, action) {
      state.msg = action.payload;
    },
  },
});
export const {
  setNumb,
  setVisibleNum,
  looseScore,
  refreshScore,
  setHighscore,
  setMsg,
} = rndSlice.actions;
export default rndSlice.reducer;
