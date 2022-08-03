import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ backgound: "lightgray", padding: 16, fonstSize: 24 }}>
        끝!
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
