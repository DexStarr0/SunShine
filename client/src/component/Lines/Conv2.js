import { useState, useEffect, useContext } from "react";
import MsgBox from "../BasicComp/MsgBox";
import Button from "../BasicComp/Button";
import RandomEmoji from "../BasicComp/RandomEmoji";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import RandomText from "../BasicComp/RandomText";

export default function Conv2() {
  const navigate = useNavigate();
  const { isValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });
  const message = [
    "Thanks for your words. thing is that",
    "मैं बहुत दिनों से तुमसे बात करना चाहता था",
    "But i was afraid of the outcome of the conversation",
    "और जब मैं बात करने का सोचा तो ",
    "I was not able to speak with u",
    "पता नहीं तुम सामने होती हो तो मैं कुछ बोल नहीं पाता",
    "But all I could do is stare at you!",
    "or you can say I couldn't take my eyes off from you",
    "i Know it may sound stupid ! right",
    "तो बात इतनी सी है की",
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
            Listening
          </button>
        </>
      );
    } else if (cnt === message.length) {
      return (
        <>
          <Button
            btnVal="आगे"
            location="line2"
            message={message[message.length - 1]}
            answer="go ahead"
          />
        </>
      );
    } else
      return (
        <button className="button-42" onClick={ChangeLine}>
          <RandomText />
        </button>
      );
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

/* {message.length === cnt ? (
            <>
              <Button btnVal="next" location="line2" />
              <Button btnVal="ok" location="Con1" />
            </>
          ) : (
            <button className="button-42" onClick={ChangeLine}>
              Ok
            </button>
          )} */
