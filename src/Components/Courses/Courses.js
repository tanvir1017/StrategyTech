import React, { useEffect, useState } from "react";
import course_img from "../../images/online_school_4x.png";
import Footer from "../Footer/Footer";
import Course from "./Course";
import "./course.css";

const Services = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakedb.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        {/* couse banner header */}
        <div className="course_banner">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-12 text-start d-flex justify-content-center align-items-center">
              <div>
                <h1>
                  <span
                    style={{
                      color: "#293072",
                      fontWeight: 700,
                      fontSize: "65px",
                    }}
                  >
                    Easy solution
                  </span>{" "}
                  to develop your skill from home
                </h1>
                <div className="mission_border">
                  <p>
                    Our mission is to build up your as skill full person. We are
                    working on it since 2010. also, we build a lot of person who
                    was not skill after graduate
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-lg-5 col-md-5 col-12">
              <img className="img-fluid w-100" src={course_img} alt="" />
            </div>
          </div>
        </div>
        {/* couse banner header */}

        <div className="row">
          {courses.map((course) => (
            <Course key={course._id} course={course}></Course>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
