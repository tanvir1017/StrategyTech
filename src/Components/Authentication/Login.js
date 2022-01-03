import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import useAuth from "../hooks/useAuth";
import "./Authentication.css";

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { loginUser, isLoading, user, authError, signinWithGoogle } = useAuth();
  const location = useLocation();
  // const history = useHistory();
  const handleOnChange = e => {
    const fied = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[fied] = value;
    setLoginData(newLoginData);

  }
  const handleLogin = e => {
    loginUser(loginData.email, loginData.password, location);
    e.preventDefault();
  }
  const handleGoogleSignIn = () => {
    signinWithGoogle(location);
  }
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
          {!isLoading && <form onSubmit={handleLogin}>
            <div class="mb-3 text-start">
              <input
                type="email"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                name="email"
                onChange={handleOnChange}
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                name="password"
                onChange={handleOnChange}
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
          </form>}
          <p className="mt-3">or</p>
          <button className="btn " onClick={handleGoogleSignIn} >
            {" "}
            Signin with
            <img
              className="img-fluid"
              width="30px"
              src="https://img.icons8.com/nolan/512/google-logo.png"
              alt=""
            />

          </button>
        </div>

        {/* Useless columns */}
        <div className="col-lg-3 col-md-3 col-12"></div>
        {/* Useless columns */}
      </div>
      {
        isLoading && <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );
};

export default Login;
