import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrow from "../../images/arrow.png";
import mark from "../../images/mark.png";
import time from "../../images/time.png";
import users from "../../images/users_icon.png";
import Footer from "../Footer/Footer";
import "./course.css";

const CourseDetails = () => {
  const { coursesId } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const run = async () => {
      fetch(`https://enigmatic-fjord-94198.herokuapp.com/courses/${coursesId}`)
        .then(res => res.json())
        .then(data => setCourse(data))
    }
    run()
  }, [coursesId])
  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 col-md-7 col-sm-12   instructor_intro_and_course_details text-start">
              <div className="course_intro">
                <p>{course.course_subjects}</p>
                <small>
                  {course.course_title}
                </small>
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
                    <p>Ariana Grande</p>
                    <small>
                      MS (CSE), University of Oxford (UK); BA, MA (CSE),
                      University of BarmingHam;
                    </small>
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
                <img className="img-fluid w-100" src={course.course_img} alt="img" />
                {/* course enroll */}
                <div className="course_enroll_time mt-3 d-flex justify-content-around align-items-center">
                  <div className="course_enroll d-flex text-start">
                    <img src={users} alt="" />
                    <div className="user_about">
                      <p>Total Enroll</p>
                      <small>16,138</small>
                    </div>
                  </div>
                  <div className="course_enroll d-flex text-start">
                    <img src={time} alt="" />
                    <div className="user_about">
                      <p>Hard work needed</p>
                      <small>{course.course_duration}</small>
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
                        <span className="ms-2 fw-bold">{course.course_quiz}+ Quizes</span>
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
                        <span className="ms-2 fw-bold">{course.course_video}+ Videos</span>
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
                        <span className="ms-2 fw-bold">1k+ Questions</span>
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
                    <button className="btn ">
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
        <div className="course_description container">
          <p>Course Description</p>
          <hr />
          <small>
            Do you want to see your child Code fluently in the classroom? Or do
            you just want to take your little one a step further in the future?
            If your answer is yes then this course is for you. Spoken Code plays
            a very important role in academic life in classroom or co-curricular
            activities, which also affects college and job applications. In
            everyday life, talking to foreigners, traveling or going abroad to
            study, in each case, the need to Code with confidence is much
            greater. If you want your youngest member of the family to succeed
            in life in the future with his or her ability to communicate in
            Code, this course is for those young people. With a keen sense of
            humor, excellent educational qualifications and many years of
            teaching experience, Munjerin Shahid will serve as an ideal teacher
            to enhance your child's spoken Code skills. In this course Munjerin
            Shahid's Guidance promises to help your child overcome the fear of
            ing Code and help him to Code fluently more easily. The course
            contains 35 fun videos so that the little ones can have fun. There
            are also 35 flashcards that will help you remember previous lessons,
            35 interactive quizzes that will help you understand their progress,
            and 35 notes that will keep a record of what they read. So enroll in
            the course today to help your little girl take a step forward in
            learning to Code fluently and confidently.
          </small>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CourseDetails;
