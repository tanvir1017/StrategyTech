import React from "react";
import arrow_icon from "../../images/arrow.gif";
import itCounsulting from "../../images/person-01.png";
import About from "./About/About";
import ClientSuccess from "./ClientSuccess/ClientSuccess";
import "./Header.css";
import LeatestTech from "./LeatestTech/LeatestTech";
import OurITServices from "./OurITServices/OurITServices";

const HomePage = () => {
  return (
    <>
      <div className="heading_background">
        {/* Heading with img and title description text */}
        <div className="container">
          <div className="row ">
            <div className="d-flex justify-content-center align-items-center col-lg-5 col-md-5 col-12 text-start">
              <div className="heading_title">
                <p>
                  <span className="heading_title_border me-4"></span> CONSULTING
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
      </div>
      {/* About section with  */}
      <About></About>

      {/* ClientSucess section */}
      <ClientSuccess></ClientSuccess>

      {/* Leatest success */}
      <div className="heading_background">
        <LeatestTech />
      </div>

      {/* Our It services */}
      <div className="ourItService">
        <OurITServices />
      </div>
    </>
  );
};

export default HomePage;
