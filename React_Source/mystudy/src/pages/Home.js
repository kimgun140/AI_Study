import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
const home = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="/about">About</Link>
      </ul>
      <ul>
        <Link to="/page">Page</Link>
      </ul>
      <ul>
        <Link to="/pages">게시글 목록</Link>
      </ul>
      <ul>
        <Link to="/component">Component</Link>
      </ul>
      <ul>
        <Link to="/profiles/velopert">velopert프로필</Link>
      </ul>
      <ul>
        <Link to="/profiles/kimgun">kimgun프로필</Link>
      </ul>
      <ul>
        <Link to="/profiles/void">존재하지않는프로필</Link>
      </ul>
    </div>
  );
};

export default home;
