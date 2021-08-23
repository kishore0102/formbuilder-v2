import "./RootPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { DiAtom } from "react-icons/di";

export const TopNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-light navbar-light"
      style={{ borderBottom: "1px solid rgb(156, 152, 152)" }}
    >
      <div className="container">
        <DiAtom size={40} />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a className="navbar-brand" href="/">
          Deadshot Form Builder
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link mx-2" href="/createForm">
                Create Form
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/savedForm">
                Saved Forms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/submissions">
                Submissions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
