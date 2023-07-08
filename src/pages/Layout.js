import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBars);

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

  function change() {
    if (document.getElementById("navbar").classList.contains("visible")) {
      document.getElementById("navbar").classList.add("open");
      document.getElementById("navbar").classList.remove("visible");
    } else {
      document.getElementById("navbar").classList.add("visible");
      document.getElementById("navbar").classList.remove("open");
    }
  }

  function closeNav() {
    if (document.getElementById("navbar").classList.contains("visible")) {
      document.getElementById("navbar").classList.add("open");
      document.getElementById("navbar").classList.remove("visible");
    }
  }

  return (
    <div class="layout">
      <nav className={`${currentPage === "projects" ? "wider" : ""}`}>
        <div class="left">
          <a onClick={closeNav}>
            <Link to="/">Nicole Han</Link>
          </a>
        </div>
        <div class="right">
          <div className="open" id="navbar">
            <a onClick={closeNav}>
              <Link to="/">Home</Link>
            </a>
            <a onClick={closeNav}>
              <Link to="/projects">Projects</Link>
            </a>
          </div>
          <i className="closed" onClick={change}>
            <FontAwesomeIcon className="bars" icon={["fas", "bars"]} />
          </i>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
