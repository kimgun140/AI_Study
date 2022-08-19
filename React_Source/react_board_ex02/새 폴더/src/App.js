import { Route, Routes } from "react-router-dom";
// import React, {useState, useEffect} from "react";
import Main from "./Main";
import LoginForm from "./LoginForm";
import MemberForm from "./MemberForm";
import { Loading } from "./Loading/Loading";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Loading />} />
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="/main" element={<Main />} />
      <Route path="/member" element={<MemberForm />} />
    </Routes>
  );
}

export default App;
