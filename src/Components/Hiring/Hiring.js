import React from "react";
import hiring from "../../images/hiring.png";
import "./Hiring.css";

const Hiring = () => {
  return (
    <div className="hiring_banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-12 text-start d-flex justify-content-center align-items-center">
            <div className="hiring_section_text">
              <h2>We are hiring, join the team</h2>
              <p>
                Join us, and work in a challenging, fast-paced, and exciting
                environment
              </p>
              <div className="d-flex align-items-center ">
                <div className="get_in_touch">
                  <i class="fas fa-envelope"></i>
                </div>
                <p className="get_in_touch_text">Get in touch</p>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-lg-6 col-md-6 col-12">
            <img className="img-fluid w-100" src={hiring} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
