import React from "react";
import arrow_icon from "../../images/arrow.gif";
import itCounsulting from "../../images/person-01.png";
import About from "./About/About";
import "./Header.css";

const HomePage = () => {
  return (
    <div className="heading_background">
      <div className="container">
        <div className="row ">
          <div className="d-flex justify-content-center align-items-center col-lg-5 col-md-5 col-12 text-start">
            <div className="heading_title">
              <p>
                <span className="heading_title_border me-2"></span> CONSULTING
                SERVICES
              </p>
              <h1 className="heading_text">IT Consulting services</h1>
              <div className="heading_text_desc">
                <p>
                  Current state of it does not align with your business
                  strategy? Request our it consulting services now.
                </p>
              </div>
              <div className="heading_hover_button">
                <span className="arrow_btn shadow-lg">
                  <img src={arrow_icon} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-6 col-md-6 col-12">
            <img className="img-fluid w-100" src={itCounsulting} alt="" />
          </div>
        </div>
      </div>
      <About></About>
    </div>
  );
};

export default HomePage;
