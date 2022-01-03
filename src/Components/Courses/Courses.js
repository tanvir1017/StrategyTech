import React, { useEffect, useState } from "react";

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
    <div>
      <h2>Courses aviable {courses.length}</h2>
    </div>
  );
};

export default Services;
