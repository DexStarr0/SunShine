import { useState, useEffect, useContext } from "react";
import MsgBox from "../BasicComp/MsgBox";
import Button from "../BasicComp/Button";
import RandomEmoji from "../BasicComp/RandomEmoji";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Line2() {
  const navigate = useNavigate();
  const { isValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });
  const message = [
    "बातें तो बहुत है जो करनी मिलकर तेरे संग ",
    "अभी के लिए यह बता दो क्या Dinner करोगी मेरे संग ",
  ];
  const [state, setState] = useState([message[0]]);
  const [cnt, setcnt] = useState(1);
  const ChangeLine = () => {
    if (cnt < message.length) {
      state.push(message[cnt]);
      setState(state);
      setcnt(cnt + 1);
    }
  };

  return (
    <>
      <section>
        <div className="imgBx">
          <div className="emoji">😳</div>
        </div>
        <div className="msgBox">
          {state.map((msg, i) => {
            return <MsgBox key={i} msg={msg} />;
          })}
        </div>
        <div className="btnBox">
          {message.length === cnt ? (
            <>
              <Button
                btnVal="YES"
                location="yesRep"
                message={message[message.length - 1]}
                answer="YES"
              />
              <Button
                btnVal="NO"
                location="noRep"
                message={message[message.length - 1]}
                answer="NO"
              />
            </>
          ) : (
            <button className="button-42" onClick={ChangeLine}>
              Okai
            </button>
          )}
        </div>
      </section>
    </>
  );
}
