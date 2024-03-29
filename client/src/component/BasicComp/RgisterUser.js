import { useState } from "react";

import "./home.css";

export default function RgisterUser() {
  const [name, setname] = useState("");
  const [plachold, setplachold] = useState("What's her name");

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
      }
    } catch (error) {
      setplachold(error.message);
    }
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/add_verify_user", {
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
        setname("");
        setplachold(data.message);
      }
    } catch (error) {
      setplachold(error.message);
      setname("");
    }
  };
  return (
    <section>
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
          add
        </button>

        <button className="button-42" onClick={clearUser}>
          Delete
        </button>
      </div>
    </section>
  );
}
