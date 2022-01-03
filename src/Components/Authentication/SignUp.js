import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Authentication.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="row login_wrapper">
        {/* Useless columns */}
        <div className="col-lg-3 col-md-3 col-12"></div>
        {/* Useless columns */}
        <div className="col-lg-6 col-md-6 col-12  login_body">
          <div className="company_identity_login">
            <img src={logo} alt="" />
            <h2>Make an account</h2>
          </div>
          <div class="mb-3 text-start">
            <input
              type="email"
              class="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Re-type Password"
            />
          </div>
          <div className="login_link">
            <p>
              Already have an account ? <Link to="/login">Log in</Link>
            </p>
          </div>
          <div className="authentication_btn">
            <button className="btn me-2">Sign up</button>
            <button className="btn">
              {" "}
              <img
                className="img-fluid"
                width="30px"
                src="https://img.icons8.com/nolan/512/google-logo.png"
                alt=""
              />
              Google
            </button>
          </div>
        </div>
        {/* Useless columns */}
        <div className="col-lg-3 col-md-3 col-12"></div>
        {/* Useless columns */}
      </div>
    </div>
  );
};

export default Signup;
