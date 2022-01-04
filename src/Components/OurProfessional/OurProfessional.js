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
        {professional.map((data) => (
          <Professional key={data._id} data={data}></Professional>
        ))}
      </div>
    </div>
  );
};

export default OurProfessional;
