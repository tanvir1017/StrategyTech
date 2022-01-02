import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Header.css";

const OurITServices = () => {
  return (
    <div className="container">
      <div className="row nested_route">
        <div className="text-start what_we_offer_heading">
          <span className="what_we_offer ">
            <small className="ms-3 fw-bold ">WHAT WE OFFER</small>
          </span>
          <h1>Our IT consulting services</h1>
          <p>
            We offer IT consulting services that can help you improve your
            software, create a successful digital strategy, and improve
            operations by optimising your software portfolio.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-12 what_we_offer_nested_route ">
          <Link to="/home/e_support">Emergency support</Link>
          <Link to="/home/r_o_support">Remote office support</Link>
          <Link to="/home/e_support">Network administrator</Link>
          <Link to="/home/r_o_support">Office systems</Link>
          <Link to="/home/e_support">Cloud configuration</Link>
        </div>
        <div className="col-lg-7 col-md-7 col-12 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default OurITServices;
