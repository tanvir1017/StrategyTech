import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { course_subject, course_img, instructor_name, _id } = course;
  return (
    <div className="col-lg-3 col-md-3 col-12">
      <div className="card_wrapper mb-3 ">
        <Link to={`/courses_details/${_id}`}>
          <img className="img-fluid w-100" src={course_img} alt="" />
        </Link>
        <div className="card_body ps-2 text-start">
          <p className="course_title">{course_subject}</p>
          <p className="course_instructor">{instructor_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
