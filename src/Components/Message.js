import { useSelector } from "react-redux";

const Message = (props) => {
  const msg = useSelector((state) => state.rndSlice.msg);

  return <p className="message">{msg}</p>;
};

export default Message;
