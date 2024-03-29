import { useState } from "react";
import Button from "./Button";
import RandomEmoji from "./RandomEmoji";

export default function FeedBack({ loc, plahol }) {
  const [value, setvalue] = useState("");
  return (
    <section>
      {" "}
      <div className="imgBx">
        <RandomEmoji />
      </div>
      <div className="msgBox">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          placeholder={plahol}
        />
      </div>
      <div className="btnBox">
        <Button
          btnVal="submit"
          location={loc}
          message={plahol}
          answer={value}
        />
      </div>
    </section>
  );
}
