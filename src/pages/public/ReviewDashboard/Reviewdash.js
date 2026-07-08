import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "../../../common_comp/Layout/Layout";
import Benifits from "./Benifits";
import Invitationjoin from "./Invitationjoin";
import InvitationReview from "./InvitationReview";
import Conflicts from "./Conflicts";
import Confidential from "./Confidential";
import TimelyReview from "./TimelyReview";
import Rating from "./Rating";
import PeerReview from "./PeerReview";
import Overall from "./Overall";


const Reviewdash = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ensures smooth scrolling
    });
   
  };

  return (
    <>
      <Layout>
        <Container fluid>
          <Row>
          <Col
              lg={3} sm={12}
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
                  to="/for-reviewers/0-benefits-for-peer-reviewers"
                  className="joab_common_navlink"
                >
                
           Benifits for Peer-Reviewers
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/for-reviewers/1-invitation-to-join-our-peer-reviewer-database"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                  
                 Invitation to Join our Peer-Reviewer Database
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/for-reviewers/2-invitation-to-review"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                 
               Invitation to Review
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/for-reviewers/3-potential-conflicts-of-interests"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                 Potential Conflicts of Interests
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/for-reviewers/4-confidentiality-and-anonymity"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
               
           Confidentiality and Anonymity
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/for-reviewers/5-timely-review-reports"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
            Timely Review Reports
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/for-reviewers/6-rating-the-manuscript"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                > Rating the Manuscipt
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/for-reviewers/7-overall-recommendation"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                > Overall Recommendation
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/for-reviewers/8-peer-review-report"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >Peer-review Report
                </Nav.Link>
              </Nav>
            </Col>

            {/* Main Content Area */}
            <Col
              lg={8} sm={12}
              style={{
                padding: "2rem",
                // height: "100vh",
                // overflowY: "auto",
              }}
            >
              <Routes>
                <Route
                  path="/0-benefits-for-peer-reviewers"
                  element={<Benifits/>}
                />
                <Route
                  path="/1-invitation-to-join-our-peer-reviewer-database"
                  element={<Invitationjoin />}
                />
                <Route
                  path="/2-invitation-to-review"
                  element={<InvitationReview />}
                />
                <Route
                  path="/3-potential-conflicts-of-interests"
                  element={<Conflicts />}
                />
                <Route
                  path="/4-confidentiality-and-anonymity"
                  element={<Confidential />}
                />
                <Route
                  path="/5-timely-review-reports"
                  element={<TimelyReview />}
                />
                 <Route
                  path="/6-rating-the-manuscript"
                  element={<Rating />}
                />
                  <Route
                  path="/7-overall-recommendation"
                  element={<Overall />}
                />
                  <Route
                  path="/8-peer-review-report"
                  element={<PeerReview />}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Reviewdash;
