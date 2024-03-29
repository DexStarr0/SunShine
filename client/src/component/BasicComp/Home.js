import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RandomEmoji from "./RandomEmoji";
import { UserContext } from "../../App";
import "./home.css";

export default function Home() {
  const { setisValid } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [plachold, setplachold] = useState("Your name please");

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/verify_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      let data = await response.json();
      if (response.status === 400 || !data) {
        throw Error(data.error);
      } else {
        setisValid(true);
        navigate("Conv1");
      }
    } catch (error) {
      setplachold(error.message);
      setname("");
    }
  };
  return (
    <section>
      <div className="imgBx">
        <RandomEmoji />
      </div>
      <div className="msgBox">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder={plachold}
        />
      </div>
      <div className="btnBox">
        <button className="button-42" onClick={postData}>
          submit
        </button>
      </div>
    </section>
  );
}
