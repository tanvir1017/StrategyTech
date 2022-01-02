import React from "react";
import ceo from "../../../images/ceo.jpg";
import client from "../../../images/client.jpg";
import "../Header.css";

const ClientSuccess = () => {
  return (
    <div className="container">
      <div className="row about_us_row">
        <div className="col-lg-6 col-md-6 col-12 about_us_heading">
          <div className="heading_title text-start">
            <p>
              <span className="heading_title_border me-4"></span> CLIENT SUCCESS
            </p>
            <h1 className="heading_about_text">
              Over a decade of stellar software solutions
            </h1>
            <div className="heading_text_desc mt-3">
              <p>
                We find the best solutions for our clients because we value
                their reputation. We have more than 1500 satisfied clients that
                have chosen us
              </p>
            </div>

            <div className="ceo_qoute mt-5">
              <h3>
                &quot; They're committed to ensuring the success of our
                business.&quot;
              </h3>
              <div className="d-flex ceo_section">
                <img src={ceo} alt="" />
                <div className="ceo_text">
                  <h5>Adam Smith</h5>
                  <p>CEO of StrategyTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-5 col-md-5 col-12 ">
          <img src={client} className="img-fluid w-100 about_us_img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientSuccess;
