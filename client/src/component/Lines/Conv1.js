import { useState, useContext, useEffect } from "react";
import MsgBox from "../BasicComp/MsgBox";
import Button from "../BasicComp/Button";
import RandomEmoji from "../BasicComp/RandomEmoji";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import RandomText from "../BasicComp/RandomText";

export default function Conv1() {
  const navigate = useNavigate();
  const { isValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });

  const message = [
    "Heelllo SunShine",
    "कुछ समझ नहीं आ रहा था कहाँ से शुरुआत करूँ तो सोचा",
    "🌟 lines can better express my feeling 🌟",
    "so the line is.",
  ];
  const [state, setState] = useState([message[0]]);
  const [cnt, setcnt] = useState(1);
  const ChangeLine = () => {
    if (cnt < message.length) {
      setState([message[cnt]]);
      setcnt(cnt + 1);
    }
  };
  function BtnType() {
    if (cnt === 1) {
      return (
        <>
          <button className="button-42" onClick={ChangeLine}>
            Helllo
          </button>
        </>
      );
    } else if (cnt === 4) {
      return (
        <>
          <Button
            btnVal="line is??"
            location="line1"
            message={state[state.length - 1]}
            answer="go ahead"
          />
        </>
      );
    } else {
      return (
        <>
          <button className="button-42" onClick={ChangeLine}>
            <RandomText />
          </button>
        </>
      );
    }
  }

  return (
    <>
      <section>
        <div className="imgBx">
          <RandomEmoji />
        </div>
        <div className="msgBox">
          {state.map((msg, i) => {
            return <MsgBox key={i} msg={msg} />;
          })}
        </div>
        <div className="btnBox">{BtnType()}</div>
      </section>
    </>
  );
}
