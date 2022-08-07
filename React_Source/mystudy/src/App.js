import React from "react";
import { Route, Routes } from "react-router-dom";
import Component from "./component/Component";
// import Topbutton from "./component/Topbutton";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Pages from "./pages/Pages";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import About from "./pages/About";
// import Layout from "./Layout";
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/component" element={<Component />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/pages" element={<Pages />}>
          <Route path=":id" element={<Page />} />
        </Route>
      </Route>
      {/* <Component /> */}
      {/* <Topbutton /> */}
    </Routes>
  );
};

export default App;
