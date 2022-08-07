import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 32, fontSize: 24 }}>
        Header
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
