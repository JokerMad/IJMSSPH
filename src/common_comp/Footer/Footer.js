import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ensures smooth scrolling
    });
  };

  return (
    <footer className="footer  text-white py-4   jab_footer">
      <Container className="mt-3">
        <Row>
          <Col md={6} className="mb-3 fw-bold">
            <h5 className="text-uppercase fw-bold">
              International Journal of Interdisciplinary Studies and System
              Science{" "}
            </h5>
            <p className="mb-0">Open Access</p>
            <p>Contact</p>
            <div style={{color:"white"}}>
             
                <a href="mailto:editor@ijmssph.org" style={{display:"block",color:"white"}}>editor@ijmssph.org</a>
            
              <a href="mailto:Support@ijmssph.org"style={{display:"block",color:"white"}}>support@ijmssph.org</a>
            </div>
          </Col>

          <Col md={6}>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-white text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/Aim-and-scope"
                      className="text-white text-decoration-none"
                    >
                      About Us
                    </Link>
                  </li>
                  {/* <li><Link to="/" className="text-white text-decoration-none">Contact Us</Link></li> */}
                  {/* <li><Link to="/" className="text-white text-decoration-none">Announcements</Link></li>
                  <li><Link to="/" className="text-white text-decoration-none">FAQs</Link></li> */}
                  <li>
                    <Link
                      to="/editorial-board-International-Journal-of-Interdisciplinary-Studies-and-System-Science"
                      className="text-white text-decoration-none"
                      onClick={handleScrollToTop}
                    >
                      {" "}
                      Editorial
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/info/Privacy-Policy"
                      className="text-white text-decoration-none"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/info/Term-and-Conditions"
                      className="text-white text-decoration-none"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/information/for-authors/copyright-policy"
                      className="text-white text-decoration-none"
                    >
                      Copyright
                    </Link>
                  </li>
                  {/* <li><Link to="/" className="text-white text-decoration-none">Cookie Preference</Link></li>
                  <li><Link to="/" className="text-white text-decoration-none">Sitemap</Link></li> */}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <Row className="text-center">
          <Col>
            <p className="mb-0">© Copyright 2024 </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
