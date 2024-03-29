import { useState, useEffect, useContext } from "react";
import Button from "../BasicComp/Button";
import MsgBox from "../BasicComp/MsgBox";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function YesRep() {
  const navigate = useNavigate();
  const { isValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  let dateTime = `${time}${date}`;
  const msg = "Any suggestion for date and time";
  return (
    <>
      <section>
        <div className="imgBx">
          <div className="emoji">😍</div>
        </div>
        <div className="msgBox">
          <MsgBox msg={msg} />
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
        </div>
        <div className="btnBox">
          <Button
            btnVal="submit"
            location="seeyou"
            message={msg}
            answer={dateTime}
          />
        </div>
      </section>
    </>
  );
}
