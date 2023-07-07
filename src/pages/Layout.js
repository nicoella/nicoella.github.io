import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div class="layout">
      <nav>
        <div class="left">
          <a>
            <Link to="/">Nicole Han</Link>
          </a>
        </div>
        <div class="right">
          <div class="open" id="nav">
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/projects">Projects</Link>
            </a>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
