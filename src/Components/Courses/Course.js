import React from "react";

const Course = ({ course }) => {
  const { course_title } = course;
  return (
    <div className="col-lg-3 col-md-3 col-12">
      <h2>{course_title}</h2>
    </div>
  );
};

export default Course;
