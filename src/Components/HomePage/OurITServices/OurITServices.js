import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

const OurITServices = () => {
  return (
    <div className="container">
      <div className="row">
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
        <div className="col-lg-5 col-md-5 col-12">
          <Link to="/">Emergency support</Link>
        </div>
        <div className="col-lg-7 col-md-7 col-12"></div>
      </div>
    </div>
  );
};

export default OurITServices;
