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
    } else if (location.pathname === "/achievements") {
      setCurrentPage("achievements");
    } else if (location.pathname === "/projects-full") {
      setCurrentPage("projects-full");
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
    <div className="layout">
      <nav className={`${currentPage === "projects" ? "wider" : ""}`}>
        <div className="left">
          <Link onClick={closeNav} to="/">
            Nicole Han
          </Link>
        </div>
        <div className="right">
          <div className="open" id="navbar">
            <Link
              className={`${
                currentPage === "home" || currentPage === "achievements"
                  ? "active"
                  : "inactive"
              }`}
              onClick={closeNav}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${
                currentPage === "projects" || currentPage === "projects-full"
                  ? "active"
                  : "inactive"
              }`}
              onClick={closeNav}
              to="/projects"
            >
              Projects
            </Link>
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
