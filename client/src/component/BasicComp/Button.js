import { useNavigate } from "react-router-dom";

export default function Button({ btnVal, location, message, answer }) {
  const navigate = useNavigate();

  function disableBtn() {
    document.getElementById("myBtn").disabled = true;
  }

  function undisableBtn() {
    document.getElementById("myBtn").disabled = false;
  }
  const postData = async (e) => {
    e.preventDefault();
    disableBtn();
    try {
      const response = await fetch("/updates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, answer }),
      });

      let data = await response.json();
      if (response.status === 400 || !data) {
        throw Error(data.error);
      } else {
        navigate(`/${location}`);
        undisableBtn();
      }
    } catch (error) {
      undisableBtn();
    }
  };

  return (
    <div>
      <button id="myBtn" className="button-42" onClick={postData}>
        {btnVal}
      </button>
    </div>
  );
}
