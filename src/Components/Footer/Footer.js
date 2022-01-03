import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <Row className="g-0 p-5">
      <Col md={2} sm={12} lg={2} className="text-start">
        <ul>
          <h4 className="mb-4 text-muted">COMPANY</h4>

          <li className="mb-2 fs-6 ">About</li>
          <li className="mb-2 fs-6 ">How it works</li>
          <li className="mb-2 fs-6 ">Customers</li>
          <li className="mb-2 fs-6 ">Careers</li>
        </ul>
      </Col>
      <Col md={2} sm={12} lg={2} className="text-start">
        <ul>
          <h4 className="mb-4 text-muted">HELP</h4>

          <li className="mb-2 fs-6 ">Contact us</li>
          <li className="mb-2 fs-6 ">FAQ</li>
          <li className="mb-2 fs-6 ">Legal & Privacy</li>
        </ul>
      </Col>
      <Col md={3} sm={12} lg={3} className="text-start">
        <ul>
          <h4 className="mb-4 text-muted">SERVICES</h4>

          <li className="mb-2 fs-6 ">Emergency support</li>
          <li className="mb-2 fs-6 ">Remote office support</li>
          <li className="mb-2 fs-6 ">Network administration</li>
          <li className="mb-2 fs-6 ">Office systems</li>
          <li className="mb-2 fs-6 ">Cloud configuration</li>
        </ul>
      </Col>
      <Col md={5} sm={12} lg={5} className="text-start">
        <ul>
          <img className="mb-4" src={logo} alt="" />

          <li className="mb-2 fs-6 ">
            178 West 27th Street, Suite 527 New York NY 10012
          </li>
          <li className="mb-2 fs-6 ">+00965652653</li>
          <li className="mb-2 fs-6 ">career@strategy.com</li>
          <li>
            <ul className="d-flex p-0">
              <li className="me-4 fs-4 mt-3">
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li className="me-4 fs-4 mt-3">
                <i className="fab fa-twitter"></i>
              </li>
              <li className="me-4 fs-4 mt-3">
                <i className="fab fa-facebook-f"></i>
              </li>
              <li className="me-4 fs-4 mt-3">
                <i className="fab fa-snapchat-ghost"></i>
              </li>
            </ul>
          </li>
        </ul>
      </Col>
      <Col sm={12} className="mt-4 text-start">
        <p>&copy; 2022 StrategyTech. All Rights Reserved.</p>
        <p>
          Get professional IT consulting services about IT management, custom
          software and website development to improve your business or start
          your own IT project. Read our pages to learn more about the IT
          consulting we offer to companies like yours.
        </p>
      </Col>
    </Row>
  );
};

export default Footer;
