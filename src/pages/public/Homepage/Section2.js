import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <Container className="my-5  pt-5 pb-2  mx-auto ">
      <Row className="px-3    ">
        <Col
          xs={6}
          md={6}
          lg={2}
          className="jab_home_section2_border me-lg-3 mx-0  "
        >
          <h4 className="fw-bold">38%</h4>
          <p className="text-muted">Acceptance Rate</p>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={2}
          className="jab_home_section2_border me-lg-3 mx-0  "
        >
          <h4 className="fw-bold">5 days</h4>
          <p className="text-muted">Time to first decision</p>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={2}
          className="jab_home_section2_border me-lg-3 mx-0  "
        >
          <h4 className="fw-bold">30 days</h4>
          <p className="text-muted">Review time</p>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={2}
          className="jab_home_section2_border me-lg-3 mx-0  "
        >
          <h4 className="fw-bold">7 days</h4>
          <p className="text-muted">Acceptance to publication</p>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={2}
          className="jab_home_section2_border  d-flex justify-content-center align-items-center mt-lg-0 "
        >
          <div className=" d-flex align-items-center">
            <div className="arrow-circle me-2">
              <FaArrowRight />
            </div>

            <Link to="/about/Journal-Insights" className="text-warning ">
              <h5 className="me-2 fw-bold view-insights">View all insights</h5>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
