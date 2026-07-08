import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "../../../common_comp/Layout/Layout";
import GuideforAuthors from "./subAuthor/GuideforAuthors";
import ReviewProcess from "./subAuthor/ReviewProcess";
import CopyrightPolicy from "./subAuthor/CopyrightPolicy";
import GuideforEditors from "./subAuthor/GuideforEditors";
import GuideforReviewers from "./subAuthor/GuideforReviewers";
import OpenAccessArchiving from "./subAuthor/OpenAccessArchiving";
import AIPolicies from "./subAuthor/AIPolicies";
import PlagiarismPolicy from "./subAuthor/PlagiarismPolicy";


const AuthorDash = () => {
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
              className="d-none d-sm-block"
              md={4} lg={3} sm={12}
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
                <Nav.Link
                  as={Link}
                  to="/information/for-authors/copyright-policy"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  Copyright Policy
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/information/for-authors/publication-ethics"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  Publication Ethics
                </Nav.Link>
<Nav.Link
                  as={Link}
                  to="/information/for-authors/ai-policies"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  AI Policies
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/information/for-authors/guide-for-editor"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  Guide for Editors
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/information/for-authors/guide-for-reviewer"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  Guide for Reviewers
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/information/for-authors/open-access-archiving"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  Open Access & Archiving
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/information/for-authors/review-rocess"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  Review Process
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/information/for-authors/plagiarism-policy"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >

                  Plagiarism policy
                </Nav.Link>
              </Nav>
            </Col>

            {/* Main Content Area */}
            <Col
              md={8} sm={12}
              style={{
                padding: "2rem",
                // height: "100vh",
                // overflowY: "auto",
              }}
            >
              <Routes>
                <Route
                  path="/copyright-policy"
                  element={<CopyrightPolicy />}
                />
                <Route
                  path="/publication-ethics"
                  element={<GuideforAuthors />}
                />
                <Route
                  path="/ai-policies"
                  element={<AIPolicies />}
                />
                <Route
                  path="/plagiarism-policy"
                  element={<PlagiarismPolicy />}
                />
                <Route
                  path="/guide-for-editor"
                  element={<GuideforEditors />}
                />
                <Route
                  path="/guide-for-reviewer"
                  element={<GuideforReviewers />}
                />
                <Route
                  path="/open-access-archiving"
                  element={<OpenAccessArchiving />}
                />
                <Route
                  path="/review-rocess"
                  element={<ReviewProcess />}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default AuthorDash;
