import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "../../../../common_comp/Layout/Layout";

import Articleid from "./Articleid";

const ArticleDetailsDash = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Layout>
        <Container fluid>
          <Row>
            <Col
              lg={3}
              sm={12}
              style={{
                position: "sticky",
                top: 130,
                left: 0,
                height: "75vh",
                borderRight: "1px solid #dee2e6",
                padding: "2rem",
                zIndex: "900",
                overflow: "hidden",
              }}
            >
              <Nav className="flex-column">
                <Nav.Link href="#abstract" className="joab_common_navlink">
                  Abstract
                </Nav.Link>
                <Nav.Link href="#keywords" className="joab_common_navlink">
                  Keywords
                </Nav.Link>
                <Nav.Link href="#introduction" className="joab_common_navlink">
                  Introduction
                </Nav.Link>
                <Nav.Link href="#conclusion" className="joab_common_navlink">
                  Conclusion
                </Nav.Link>
                <Nav.Link href="#refrence" className="joab_common_navlink">
                  Reference
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/for-reviewers/7-overall-recommendation"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                  {" "}
                  Download PDF
                </Nav.Link>
              </Nav>
            </Col>
            {/* Main Content Area */}
            <Col
              lg={9}
              sm={12}
              style={{
                padding: "2rem",
                // height: "100vh",
                // overflowY: "auto",
              }}
            >
              <Articleid />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default ArticleDetailsDash;
