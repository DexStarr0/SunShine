import { useEffect, useContext } from "react";
import FeedBack from "../BasicComp/FeedBack";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function NoRep() {
  const navigate = useNavigate();
  const { isValid } = useContext(UserContext);
  useEffect(() => {
    if (!isValid) navigate("/");
  });
  return <FeedBack loc="byeforever" plahol="May I know the reason" />;
}
