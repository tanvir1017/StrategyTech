import React, { useState } from "react";
import "../Header.css";
import { filteringData } from "./data";
import Emergancy from "./NestedRoute/Emergancy";

const OurITServices = () => {
  const [text, setText] = useState("one");
  const [bText, setBText] = useState(1);
  const handleButton = (tag, num) => {
    setText(tag);
    setBText(num);
  };
  return (
    <div className="container">
      <div className="row nested_route">
        <div className="text-start what_we_offer_heading">
          <span className="what_we_offer ">
            <small className="ms-3 fw-bold ">WHAT WE OFFER</small>
          </span>
          <h1>Our IT consulting services</h1>
          <p>
            We offer IT consulting services that can help you improve your
            software, create a successful digital strategy, and improve
            operations by optimising your software portfolio.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-12 what_we_offer_nested_route ">
          <ul>
            <li
              onClick={() => handleButton("one", 1)}
              className={`${
                bText === 1 ? "activeLi" : "what_we_offer_nested_route_li"
              }`}
            >
              <button className={`li_button ${bText === 1 && "text-light"}`}>
                Emergency support
              </button>
            </li>
            <li
              onClick={() => handleButton("two", 2)}
              className={`${
                bText === 2 ? "activeLi" : "what_we_offer_nested_route_li"
              }`}
            >
              <button className={`li_button ${bText === 2 && "text-light"}`}>
                Remote office support
              </button>
            </li>
            <li
              onClick={() => handleButton("one", 3)}
              className={`${
                bText === 3 ? "activeLi" : "what_we_offer_nested_route_li"
              }`}
            >
              <button className={`li_button ${bText === 3 && "text-light"}`}>
                Network administrator
              </button>
            </li>
            <li
              onClick={() => handleButton("two", 4)}
              className={`${
                bText === 4 ? "activeLi" : "what_we_offer_nested_route_li"
              }`}
            >
              <button className={`li_button ${bText === 4 && "text-light"}`}>
                Office systems
              </button>
            </li>
            <li
              onClick={() => handleButton("one", 5)}
              className={`${
                bText === 5 ? "activeLi" : "what_we_offer_nested_route_li"
              }`}
            >
              <button className={`li_button ${bText === 5 && "text-light"}`}>
                Cloud configuration
              </button>
            </li>
          </ul>
        </div>
        <div className="col-lg-7 col-md-7 col-12 ">
          {filteringData
            .filter((data) => data.tag === text)
            .map((data) => (
              <Emergancy key={data.tag} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurITServices;
