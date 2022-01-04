import React from "react";
import "./professional.css";

const Professional = ({ data }) => {
  const { img, name, position } = data;
  return (
    <div className="col-lg-4 col-md-4 col-12 professional_body">
      <img className="img-fluid w-100" src={img} alt="" />
      <div className="professional_body_text text-start">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Professional;
