import React from "react";
import about from "../../../images/about.jpg";
import arrow_icon from "../../../images/arrow.gif";
import "../Header.css";

const About = () => {
  return (
    <div className="container">
      <div className="row about_us_row">
        <div className="col-lg-5 col-md-5 col-12 ">
          <img src={about} className="img-fluid w-100 about_us_img" alt="" />
        </div>
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-6 col-md-6 col-12 about_us_heading">
          <div className="heading_title text-start">
            <p>
              <span className="heading_title_border me-4"></span> ABOUT US
            </p>
            <h1 className="heading_about_text">
              IT strategy consulting. The latest tech.
            </h1>
            <div className="heading_text_desc mt-3">
              <p>
                Current state of it does not align with your business strategy?
                Request our it consulting services now. IT consulting company
                helps to solve different problems which you face when starts up
                new project or when improve an existing one.
              </p>
            </div>
            <div className="heading_hover_button mt-5">
              <span className="arrow_btn shadow-lg">
                <img src={arrow_icon} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
