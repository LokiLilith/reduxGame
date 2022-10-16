import { useSelector } from "react-redux";

const HidenScore = () => {
  const visibleNum = useSelector((state) => state.rndSlice.visibleNum);

  return <div className="number">{visibleNum}</div>;
};

export default HidenScore;
