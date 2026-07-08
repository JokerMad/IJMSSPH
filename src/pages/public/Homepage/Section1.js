import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import scope from "../../../assests/mainHome.jpeg";
import GUIDELINES from "../../../assests/GUIDELINES.docx";

function Section1() {
  return (
    <>
      <Container className="my-5 px-3">
        <div className="p-md-5 p-2 mb-4 shadow rounded-4">
          <Row className="py-4">
            <Col lg={6} md={4} sm={12} className="joab_common_div">
              <div className="px-lg-5 px-md-2 px-1">
                <img
                  src={scope}
                  alt="scopusimg"
                  className=""
                  style={{ width: "86%", height: "auto" }}
                />
              </div>
            </Col>
            <Col lg={6} md={8} sm={12}>
              <h2 className="display-6 fw-bold mb-3">About the Journal</h2>
              <p className="joab-common-para mb-3">
                The International Journal of Interdisciplinary Studies and
                System Science (IJMSSPH) is a peer-reviewed, open-access
                scholarly journal dedicated to advancing knowledge across
                disciplines through the lens of systems thinking, integration,
                and innovation.The journal provides a global platform for
                researchers, academicians, and professionals to explore the
                complex interactions between science, society, technology,
                management, and policy. By fostering interdisciplinary
                collaboration, IJMSSPH aims to promote evidence-based insights,
                analytical models, and transformative approaches that contribute
                to sustainable development and societal progress.
              </p>
              <h2 className="display-6 fw-bold my-4">Director</h2>
              <p>
                {" "}
                Dr. Roshan Bhaladhare, Ph.D.
                <p className="mt-5">
                  for Download Author Guideline{" "}
                  <a href={GUIDELINES} download>
                    Click Here
                  </a>
                </p>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Section1;
