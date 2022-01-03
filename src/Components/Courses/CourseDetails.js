import React from "react";
import users from "../../images/users_icon.png";
import "./course.css";

const CourseDetails = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-7 col-md-7 col-sm-12   instructor_intro_and_course_details text-start">
          <div className="course_intro">
            <p>Kid's Coding</p>
            <small>
              Teach your kids how to code in every daily life scenario with fun
              and easy tutorials!
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
                  MS (CSE), University of Oxford (UK); BA, MA (CSE), University
                  of BarmingHam;
                </small>
              </div>
            </div>
          </div>
          <div className="course_certificate">
            <p>Course Certificate</p>
            <small>
              Upon successful completion of the course, there is an exclusive
              certificate for you
            </small>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
          <div className="course_banner_and_price text-center">
            <img
              className="img-fluid w-100"
              src="https://static.vecteezy.com/system/resources/previews/003/015/024/non_2x/school-online-educational-course-banner-vector.jpg"
              alt=""
            />
            <div className="course_enroll_time mt-3">
              <div className="course_enroll d-flex text-start">
                <img src={users} alt="" />
                <div className="user_about">
                  <p>Doing the course</p>
                  <small>16,138</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
