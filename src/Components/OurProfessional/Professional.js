import React from "react";
import "./professional.css";

const Professional = ({ data }) => {
  const { img, name, position } = data;
  return (
    <div className="col-lg-4 col-md-4 col-12 mt-5 professional_body">
      <img className="img-fluid w-100" src={img} alt="" />
      <div className="professional_body_text text-start">
        <h3>{name}</h3>
        <div className="position_area d-flex justify-content-between align-items-center">
          <p>{position}</p>
          <i class="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};

export default Professional;
