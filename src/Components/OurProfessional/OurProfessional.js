import React, { useEffect, useState } from "react";
import Professional from "./Professional";

const OurProfessional = () => {
  const [professional, setProfessional] = useState([]);
  useEffect(() => {
    fetch("./fakedb3.json")
      .then((res) => res.json())
      .then((data) => {
        setProfessional(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <div className="our_story_heading text-start">
            <span className="me-3 our_story_heading_span"></span>
            <small>MEET OUR PROFESSIONAL</small>
            <h2 className="mt-4 professional_slogan">
              We want to improve your business
            </h2>
          </div>
        </div>
        {professional.map((data) => (
          <Professional key={data._id} data={data}></Professional>
        ))}
      </div>
    </div>
  );
};

export default OurProfessional;
