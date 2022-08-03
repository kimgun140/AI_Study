import { Link, Outlet } from "react-router-dom";

const pages = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <Link to="/Pages/1">Page1</Link>
      </ul>
      <ul>
        <Link to="/Pages/2">Page2</Link>
      </ul>
      <ul>
        <Link to="/Pages/3">Page3</Link>
      </ul>
      <p>꿔리쓰뜨링: {Location.search}</p>
    </div>
  );
};
export default pages;
