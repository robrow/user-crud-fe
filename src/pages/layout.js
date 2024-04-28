import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="main-nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/create">Create</NavLink></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;