import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light alert-primary">
        <div className="container">
          <h3> BloggerSpot </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
