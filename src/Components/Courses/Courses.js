import React, { useEffect, useState } from "react";
import Course from "./Course";

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
    <div className="container">
      <div className="row">
        {courses.map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Services;
