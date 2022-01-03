import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useAuth from "../hooks/useAuth";

import "./Authentication.css";



const Signup = () => {
  const [loginData, setLoginData] = useState({});
  // const history = useHistory();
  const { registerUser, isLoading, user, authError } = useAuth();


  const handleOnBlur = e => {
    const fied = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[fied] = value;

    setLoginData(newLoginData);

  }
  const handleLogin = e => {
    if (loginData.password !== loginData.password2) {
      alert('password did not match')
      return
    }
    registerUser(loginData.email, loginData.password, loginData.name);

    e.preventDefault();
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
            <h2>Make an account</h2>
          </div>
          {!isLoading && <form onSubmit={handleLogin} >
            <div className="mb-3">
              <input
                type="name"
                name="name"
                onBlur={handleOnBlur}
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="name"
              />
            </div>
            <div className="mb-3 text-start">

              <input
                type="email"
                name="email"
                onBlur={handleOnBlur}
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                onBlur={handleOnBlur}
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                className="form-control form-control-lg"
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
              <button className="btn me-2">Sign up</button></div> </form>}



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

export default Signup;
