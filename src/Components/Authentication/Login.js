import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Authentication.css";

const Login = () => {
  return (
    <div className="container">
      <div className="row login_wrapper">
        {/* Useless columns */}
        <div className="col-lg-3 col-md-3 col-12"></div>
        {/* Useless columns */}
        <div className="col-lg-6 col-md-6 col-12  login_body">
          <div className="company_identity_login">
            <img src={logo} alt="" />
            <h2>Log in</h2>
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
          <div className="login_link">
            <p>
              Doesn't have an account ?{" "}
              <Link to="/signup">Enter with new account</Link>
            </p>
          </div>
          <div className="authentication_btn">
            <button className="btn">Login</button>
          </div>
        </div>
        {/* Useless columns */}
        <div className="col-lg-3 col-md-3 col-12"></div>
        {/* Useless columns */}
      </div>
    </div>
  );
};

export default Login;
