import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import bunny from "../assets/images/bunny.png";

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
    } else if (location.pathname === "/experience") {
      setCurrentPage("experience");
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
      <nav className="content">
        <div className="left">
          <Link onClick={closeNav} to="/">
            <img src={bunny} style={{ width: '20px', height: 'auto' }} />
          </Link>
        </div>
        <div className="right">
          <div className="open" id="navbar">
            <Link
              onClick={closeNav}
              to="/"
            >
              about
            </Link>
            <Link
              onClick={closeNav}
              to="/experience"
            >
              experience
            </Link>
            <Link
              onClick={closeNav}
              to="/projects"
            >
              projects
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
