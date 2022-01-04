import React from "react";
import "../Header.css";

const LeatestTech = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="row about_us_row py-5">
          <div className="col-lg-7 col-md-7 col-12 about_us_heading">
            <div className="heading_title text-start">
              <p>
                <span className="heading_title_border me-4"></span> JOIN FACTS &
                FIGURES
              </p>
              <h1 className="heading_about_text">
                IT strategy consulting. The latest tech.
              </h1>
              <div className="heading_text_desc mt-3">
                <p>
                  In the Information Age, finding an effective IT partner is a
                  paramount. So join our team to increase your success. We know
                  all about the technologies. IT consulting company helps to
                  solve different problems which you face when starts up new
                  project or when improve an existing one.
                </p>
              </div>
            </div>
            <div className="letest_tech_button d-flex">
              <img
                src="https://img.icons8.com/color/96/000000/circled-up--v1.png"
                alt=""
              />
              <div className="letest_tech_button_text">
                <p>Talk to us</p>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 "></div>
          <div className="col-lg-4 col-md-4 col-12 our_strategy">
            <div className=" row ">
              <div className="col-lg-6 col-md-6 col-12 left_side_facts">
                <h2>70 %</h2>
                <p> Improvement work</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12 right_side_corner">
                <h2>1500+</h2>
                <p>Happy clients and HR Teams</p>
              </div>
            </div>{" "}
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-12 left_side_facts right_side_facts">
                <h2>120</h2>
                <p> Great team members</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12 right_side_facts">
                <h2>350</h2>
                <p>Full-time employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeatestTech;
