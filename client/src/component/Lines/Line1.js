import { useState, useEffect, useContext } from "react";
import MsgBox from "../BasicComp/MsgBox";
import Button from "../BasicComp/Button";
import RandomEmoji from "../BasicComp/RandomEmoji";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import RandomText from "../BasicComp/RandomText";

export default function Line1() {
  const navigate = useNavigate();
  const { isValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });
  const message = [
    "जाने कैसी नजर थी उनकी",
    "जाने कैसी नजर थी उनकी",
    "जब से इस नजर ने उस नजर को जिस नजर से था देखा ",
    // " जब से उनकी नजर ने इस नजर को जिस नजर से था देखा ",
    "तब से इस नजर ने किसी और नजर को उस नजर से एक नजर तक नहीं देखा ",
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
          <RandomEmoji />
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
                btnVal="Hmm..."
                location="feed1"
                message={state[state.length - 1]}
                answer="ok"
              />
            </>
          ) : (
            <button className="button-42" onClick={ChangeLine}>
              <RandomText />
            </button>
          )}
        </div>
      </section>
    </>
  );
}
