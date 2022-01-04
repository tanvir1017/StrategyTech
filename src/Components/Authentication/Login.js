import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loader from "../../images/Loader.gif";
import logo from "../../images/logo.svg";
import useAuth from "../hooks/useAuth";
import "./Authentication.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, authError, signinWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const fied = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[fied] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signinWithGoogle(location, navigate);
  };
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
          {!isLoading && (
            <form onSubmit={handleLogin}>
              <div className="mb-3 text-start">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  name="email"
                  onChange={handleOnChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  name="password"
                  onChange={handleOnChange}
                  placeholder="Password"
                />
              </div>
              <div className="login_link">
                <p className="text-danger fst-italic ">{authError}</p>
                <p>
                  Doesn't have an account ?{" "}
                  <Link to="/signup">Enter with new account</Link>
                </p>
              </div>
              <div className="authentication_btn">
                <button className="btn">Login</button>
                <button className="btn ms-2" onClick={handleGoogleSignIn}>
                  {" "}
                  <img
                    className="img-fluid"
                    width="25px"
                    src="https://img.icons8.com/nolan/512/google-logo.png"
                    alt=""
                  />
                  Google
                </button>
              </div>
            </form>
          )}
          {isLoading && (
            <div>
              <img className="img-fluid w-50" src={loader} alt="" />
            </div>
          )}
          <div className="authentication_btn mt-3"></div>
        </div>

        {/* Useless columns */}
        <div className="col-lg-3 col-md-3 col-12"></div>
        {/* Useless columns */}
      </div>
    </div>
  );
};

export default Login;
