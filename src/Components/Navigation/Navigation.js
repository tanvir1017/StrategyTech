import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../HomePage/Header.css";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      {/* new nav */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/courses">
                  Courses
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link active" to="/about_us">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/myorders">
                  My Order
                </Link>
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <div style={{ display: "flex" }}>
                    <p className="nav-link active ">
                      <i className="fas fa-user"></i> {user.displayName}
                    </p>
                    <p
                      className="nav-link active"
                      style={{ cursor: "pointer" }}
                      onClick={logOut}
                    >
                      Logout <i className="fas fa-sign-out-alt"></i>
                    </p>
                  </div>
                ) : (
                  <Link className="nav-link active" to="/signup">
                    <i className="fas fa-sign-out-alt"></i> SignUp
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* new nav */}
    </>
  );
};

export default Navigation;
