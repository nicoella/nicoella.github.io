import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  React.useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPage("home");
    } else if (location.pathname === "/projects") {
      setCurrentPage("projects");
    }
  }, [location]);
  return (
    <div class="layout">
      <nav className={`${currentPage === "projects" ? "wider" : ""}`}>
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
