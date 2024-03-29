import { useEffect, useContext } from "react";
import MsgBox from "../BasicComp/MsgBox";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function ByeMsg({ value }) {
  const navigate = useNavigate();
  const { isValid, setisValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });

  const clearUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/clearUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await response.json();
      if (response.status !== 201) {
        throw Error(data.error);
      } else {
        setisValid(false);
        navigate("/");
      }
    } catch (error) {}
  };
  return (
    <>
      <section>
        <div className="imgBx">
          <div className="emoji">🖐️</div>
        </div>
        <div className="msgBox">
          {value ? (
            <MsgBox msg="Keep smilining you look good with that..Bye forEver" />
          ) : (
            <MsgBox msg="see you again" />
          )}
        </div>
        <div className="btnBox">
          <button className="button-42" onClick={clearUser}>
            Bye
          </button>
        </div>
      </section>
    </>
  );
}
<></>;
