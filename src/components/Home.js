import React from "react";
import logo1 from '../assets/home1.png';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-home" href="#">
                  Cinta Coding
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
                <Link to="/login">
              <button type="button" className="btn btn-log btn-primary me-3">
                Login
              </button>
                </Link>
            </div>
          </div>
        </div>
      </nav>
      <img src={logo1} alt="Logo" className="container" />
    </div>
  );
}
