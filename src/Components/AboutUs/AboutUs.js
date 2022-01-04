import React from "react";
import { Link } from "react-router-dom";
import about from "../../images/bg-02.jpg";
import reply from "../../images/reply.jpg";
import sender from "../../images/sender.jpg";
import watch from "../../images/time.png";
import Footer from "../Footer/Footer";
import OurProfessional from "../OurProfessional/OurProfessional";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        {/* about section */}
        <div className="row g-0">
          <div className="col-md-12">
            <div className="pagination my-3">
              <Link to="/">
                <span>Home</span>
              </Link>{" "}
              <span className="mx-2 span_for_pagination"></span>{" "}
              <span>About us</span>
            </div>
            <div className="row g-0">
              <div className="col-md-10">
                <div className="our_story_heading text-start">
                  <span className="me-3 our_story_heading_span"></span>
                  <small>OUR STORY</small>
                  <h2 className="my-4">
                    Best services and consulting for business
                  </h2>
                </div>
              </div>
              <div className="col-md-8 text-start story_text">
                <p>
                  We are an IT ideas IT consulting company that was founded in
                  2007 year. We have worked with both successful and newcomer
                  companies. In our work, we use only the newest techniques that
                  help our clients to increase their popularity among the
                  audience.
                </p>
              </div>
              <div className="col-md-12">
                <div className="story_teling_img my-2">
                  <img className="img-fluid w-100" src={about} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}

      {/* join facts and figure */}
      <div className="join_facts">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="mt-5 mb-3 our_story_heading text-start">
                <span className="me-3 our_story_heading_span"></span>
                <small>JOIN FACTS & FIGURES</small>
              </div>
              <div className="join_fact_headline text-start">
                <h1>
                  We’re global, <br /> wherever you are
                </h1>
                <p className="story_text my-4">
                  Ut eros nulla, sodales ut turpis quis, rhoncus lobortis velit.
                  In sem lorem. Mauris metus velit, porttitorio vel est
                  ultrices, vehicula tincidunt.
                </p>
                <div className="star my-3">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div className="mb-3">
                  <span className="glassdoor_text">Glassdoor </span>{" "}
                  <span className="average_text">
                    Average rating (as Dec 29, 2020)
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="massege_card_wrapper">
                    <img className="sender_photo" src={sender} alt="" />
                    <div className="text-start massge_box">
                      <h5>Adam Smith</h5>
                      <p>I need a successful strategy for my company.</p>
                      <small className="fst-italic text-secondary">
                        <img className="clock" src={watch} alt="" /> 10.24 pm
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="massege_card_wrapper reply_wrapper">
                    <img className="reply_photo" src={reply} alt="" />
                    <div className="text-start massge_box">
                      <h5 className="mt-3">Dan Green</h5>
                      <p>
                        Our ability to use research to inform strategy is the
                        best and changes from different consulting companies.
                      </p>
                      <small className="fst-italic text-secondary">
                        <img className="clock" src={watch} alt="" /> 10.25 pm
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* join facts and figure */}

      {/* Our Professional */}
      <OurProfessional />
      {/* Our Professional */}
      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
};

export default AboutUs;
