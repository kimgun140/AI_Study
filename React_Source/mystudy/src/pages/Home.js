import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const home = () => {
  //   const Location = useLocation;
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="/page">Page</Link>
      </ul>
      <ul>
        <Link to="/Pages">Pages</Link>
      </ul>
      <ul>
        <Link to="/Component">Component</Link>
      </ul>{" "}
      {/* <p>꿔리쓰뜨링: {Location.search}</p> */}
    </div>
  );
};

export default home;
