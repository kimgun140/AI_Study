import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // Route 안에 패스를 두어야한다.
    //path (경로설정은 원하는것으로 설정이 가능하다.)
  );
};
export default App;
