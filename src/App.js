import { useState } from "react";
import NumberBox from "./Components/NumberBox";
import Button from "./Components/Button";
import HidenScore from "./Components/HidenScore";
import Message from "./Components/Message";
import Score from "./Components/Score";
import { useEffect } from "react";
import {
  setNumb,
  setVisibleNum,
  refreshScore,
  setMsg,
} from "./redux/slices/rndSlice";
import { useDispatch, useSelector } from "react-redux";
const randomNum = Math.floor(Math.random() * (21 - 1) + 1);

function App() {
  const [disabled, setDisabled] = useState(false);
  const [randomNumber, setRandomNumber] = useState(randomNum);
  const nnum = useSelector((state) => state.rndSlice.num);
  const score = useSelector((state) => state.rndSlice.score);
  const dispatch = useDispatch();
  useEffect(() => {
    if (score <= 0) {
      setMsg("hai perso");
    }
  }, [score]);

  const showMessage = () => {
    if (+score <= 0) {
      dispatch(setMsg("hai perso"));
    } else if (nnum > randomNumber) {
      dispatch(setMsg("scegli un numero più piccolo"));
    } else if (nnum < randomNumber) {
      dispatch(setMsg("scegli un numero più grande"));
    } else if (nnum == randomNumber) {
      dispatch(setMsg("bravo hai vinto"));

      document.body.style.backgroundColor = "green";
    }
  };

  const onAgainClick = () => {
    setDisabled(false);
    setRandomNumber(Math.floor(Math.random() * (21 - 1) + 1));
    dispatch(setNumb(""));
    dispatch(setVisibleNum("?"));
    dispatch(refreshScore());
    dispatch(setMsg("iniziamo..."));

    document.body.style.backgroundColor = "black";
  };
  console.log("rnd" + randomNumber);

  //console.log("sssss"+visibleNum)

  //console.log('siamo in app' + num)

  return (
    <div>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <Button click={onAgainClick} text={"again"} style={"btn again"} />
        <HidenScore />
      </header>
      <main>
        <NumberBox
          showMessage={showMessage}
          randomNum={randomNumber}
          disabled={disabled}
          setDisabled={setDisabled}
        />
        <section className="right">
          <Message />
          <Score />
        </section>
      </main>
    </div>
  );
}

export default App;
