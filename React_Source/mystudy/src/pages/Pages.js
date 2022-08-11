import { Link, Outlet } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <Link to="/pages/1">Page 1</Link>
      </ul>
      <ul>
        <Link to="/pages/2">Page 2</Link>
      </ul>
      <ul>
        <Link to="/pages/3">Page 3</Link>
      </ul>
      <ul>
        <Link to="/pages/4">Page 4</Link>
      </ul>
    </div>
  );
};
export default Pages;
