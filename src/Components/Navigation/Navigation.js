import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../HomePage/Header.css";

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light header">
      <div class="container d-flex justify-content-between">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse me-auto" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about_us">
                About us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/blogs">
                Blogs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Pages
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/services">
                Services
              </Link>
            </li>{" "}
            <li class="nav-item">
              <Link class="nav-link active" to="/contact_us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
