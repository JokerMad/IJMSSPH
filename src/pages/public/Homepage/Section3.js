import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "../../../assests/user.png";
import { Link } from "react-router-dom";

const JournalDesign = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Container
        fluid
        className="jab_homepage_section3_container p-lg-5 p-md-4 p-2"
      >
        <Row className="align-items-center  py-3">
          <Col md={3} sm={6} xs={3} className="text-center">
            {/* <img
              src={user}
              className=" p-2 jab_homepage_section3 mb-4"
              alt="Editor"
            /> */}
          </Col>
          <Col md={6} sm={6} xs={9}>
            <h2 className="text-warning mb-3">Editor-in-Chief</h2>
            <h4 className="mb-2">
              Dr. Dnyanesh Madhukar Belekar, Ph.D. (Medical & Health Science)
            </h4>
            <p>
              Dean, Postgraduate Institute of Medical Sciences (P.G.I.M.S.),
              Navi Mumbai Municipal Corporation
            </p>
            <Link
              to="/editorial-board-International-Journal-of-Interdisciplinary-Studies-and-System-Science"
              className="text-warning "
              onClick={handleScrollToTop}
            >
              View full Editorial Board
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JournalDesign;
