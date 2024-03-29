import { useEffect, useContext } from "react";
import FeedBack from "../BasicComp/FeedBack";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
export default function Feed1() {
  const navigate = useNavigate();
  const { isValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });
  return (
    <div>
      <FeedBack loc="Conv2" plahol="कुछ कहना चाहेगी इस पर" />
    </div>
  );
}
