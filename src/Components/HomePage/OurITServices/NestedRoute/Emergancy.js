import React from "react";

const Emergancy = ({ data }) => {
  const { title, desc, liList, secondTitle, descSecond } = data;
  return (
    <div>
      <div className="row">
        <div className="col-lg-10 col-md-10 col-12 text-start nested_components">
          <h4 className="nested_components_heading">{title}</h4>
          <div className="nested_components_text">{desc}</div>
          <ul>
            {liList.map((li, index) => (
              <li key={index} className="nested_components_text">
                {li}
              </li>
            ))}
          </ul>

          <div>
            <h4 className="nested_components_heading">{secondTitle}</h4>
            <p className="nested_components_text">{descSecond}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergancy;
