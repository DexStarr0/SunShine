import React, { createContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Line1 from "./component/Lines/Line1";
import Conv1 from "./component/Lines/Conv1";
import Conv2 from "./component/Lines/Conv2";
import Feed1 from "./component/Lines/Feed1";
import Line2 from "./component/Lines/Line2";
import NoRep from "./component/Lines/NoRep";
import YesRep from "./component/Lines/YesRep";
import ByeMsg from "./component/Lines/ByeMsg";
import RgisterUser from "./component/BasicComp/RgisterUser";
import ShowRep from "./component/BasicComp/ShowRep";
import Home from "./component/BasicComp/Home";

export const UserContext = createContext();

//reducer function for toggle btween signin and signout

function App() {
  const location = useLocation();
  const [isValid, setisValid] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ isValid, setisValid }}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Conv1" element={<Conv1 />} />
          <Route exact path="/line1" element={<Line1 />} />
          <Route exact path="/feed1" element={<Feed1 />} />
          <Route exact path="/Conv2" element={<Conv2 />} />
          <Route exact path="/line2" element={<Line2 />} />
          <Route exact path="/noRep" element={<NoRep />} />
          <Route exact path="/yesRep" element={<YesRep />} />
          <Route exact path="/msg" element={<ShowRep />} />
          <Route exact path="/add" element={<RgisterUser />} />
          <Route exact path="/byeforever" element={<ByeMsg value="false" />} />
          <Route exact path="/seeyou" element={<ByeMsg value="true" />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
