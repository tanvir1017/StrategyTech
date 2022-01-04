import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrow from "../../images/arrow.png";
import mark from "../../images/mark.png";
import time from "../../images/time.png";
import users from "../../images/users_icon.png";
import Footer from "../Footer/Footer";
import useAuth from "../hooks/useAuth";
import "./course.css";

const CourseDetails = () => {
  const { coursesId } = useParams();
  const [course, setCourse] = useState({});

  const { user } = useAuth();

  useEffect(() => {
    const run = async () => {
      const res = await fetch(
        `https://enigmatic-fjord-94198.herokuapp.com/courses/${coursesId}`
      );
      const data = await res.json();
      setCourse(data);
    };
    run();
  }, [coursesId]);

  //save to database
  const handleSendData = () => {
    const body = {
      email: user.email,
      img: course.course_img,
      name: course.course_subjects,
    };

    fetch("https://enigmatic-fjord-94198.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully enrolled");
        }
      });
  };

  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 col-md-7 col-sm-12   instructor_intro_and_course_details text-start">
              <div className="course_intro">
                <p>{course.course_subject}</p>
                <small>{course.course_title}</small>
              </div>
              <div className="instructor_intro">
                <p>Instructor</p>
                <div className="d-flex justify-content-around align-items-center">
                  <img
                    className="img-fluid"
                    src="https://image.shutterstock.com/image-photo/young-woman-glasses-working-office-260nw-519963472.jpg"
                    alt=""
                  />
                  <div className="instructor_bio">
                    <p>{course.instructor_name}</p>
                    <small>{course.instructor_education}</small>
                  </div>
                </div>
              </div>
              <div className="course_certificate">
                <p>Course Certificate</p>
                <small>
                  Upon successful completion of the course, there is an
                  exclusive certificate for you
                </small>
              </div>
            </div>
            {/* right side course banner */}
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
              <div className="course_banner_and_price text-center">
                <img
                  className="img-fluid w-100"
                  src={course.course_img}
                  alt="img"
                />
                {/* course enroll */}
                <div className="course_enroll_time mt-3 d-flex justify-content-around align-items-center">
                  <div className="course_enroll d-flex text-start">
                    <img src={users} alt="" />
                    <div className="user_about">
                      <p>Total Enroll</p>
                      <small>{course.course_enroll}</small>
                    </div>
                  </div>
                  <div className="course_enroll d-flex text-start">
                    <img src={time} alt="" />
                    <div className="user_about">
                      <p>Hard work needed</p>
                      <small>{course.course_durations}</small>
                    </div>
                  </div>
                </div>
                {/* sub element of course */}
                <div className="coruse_elements mt-2">
                  <div className="row">
                    <div className=" col-lg-6 col-md-6 col-12 mt-2">
                      <div
                        style={{
                          borderRadius: "15px",
                          border: "2px solid #293270",
                          padding: "2px",
                        }}
                        className="text-start"
                      >
                        <img
                          className="img-fluid"
                          width="20px"
                          src={mark}
                          alt=""
                        />
                        <span className="ms-2 fw-bold">
                          {course.course_quizes}+ Quizes
                        </span>
                      </div>
                    </div>
                    <div className=" col-lg-6 col-md-6 col-12 mt-2">
                      <div
                        style={{
                          borderRadius: "15px",
                          border: "2px solid #293270",
                          padding: "2px",
                        }}
                        className="text-start"
                      >
                        <img
                          className="img-fluid"
                          width="20px"
                          src={mark}
                          alt=""
                        />
                        <span className="ms-2 fw-bold">
                          {course.course_videos} Videos
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className=" col-lg-6 col-md-6 col-12 mt-2">
                      <div
                        style={{
                          borderRadius: "15px",
                          border: "2px solid #293270",
                          padding: "2px",
                        }}
                        className="text-start"
                      >
                        <img
                          className="img-fluid"
                          width="20px"
                          src={mark}
                          alt=""
                        />
                        <span className="ms-2 fw-bold">
                          {course.course_questions}Questions
                        </span>
                      </div>
                    </div>
                    <div className=" col-lg-6 col-md-6 col-12 mt-2">
                      <div
                        style={{
                          borderRadius: "15px",
                          border: "2px solid #293270",
                          padding: "2px",
                        }}
                        className="text-start"
                      >
                        <img
                          className="img-fluid"
                          width="20px"
                          src={mark}
                          alt=""
                        />
                        <span className="ms-2 fw-bold">40+ Projects</span>
                      </div>
                    </div>
                  </div>
                  <div className="price">$ {course.cours_amount}</div>
                  <div className="enroll_btn mt-3 ">
                    <button className="btn" onClick={handleSendData}>
                      Get access{" "}
                      <img
                        className="img-fluid"
                        width="20px"
                        src={arrow}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* course descriptions */}
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
        <div className="course_description container text-start">
          <p>Course Description</p>
          <hr />
          <small>{course.course_description}</small>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CourseDetails;
