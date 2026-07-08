import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "../../../common_comp/Layout/Layout";
import AimAndScope from "./subAbout/AimAndScope";
import AbstractingandIndexing from "./subAbout/AbstractingandIndexing";
import APC from "./subAbout/APC";
import EditorialBoard from "./subAbout/EditorialBoard";
import JournalInsights from "./subAbout/JournalInsights";
import PublicationFrequency from "./subAbout/PublicationFrequency";


const About = () => {
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
              md={4} lg={3} sm={12}
              className="d-none d-sm-block"
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
                  to="/about/Aim-and-scope"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                
                Aim and Scope
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about/Editorial-Board"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                  
                  Editorial Board
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/about/Abstracting-and-Indexing"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                 
                 Abstracting and Indexing
                </Nav.Link>
                {/* <Nav.Link
                  as={Link}
                  to="/about/Abstracting-and-Indexing"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                 
                 Funding of APCs and BPCs
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/about/Article-Processing-Charge"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
               
               Article Processing Charge (APC)
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about/Publication-Frequency"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                >
                
                Publication Frequency
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/about/Journal-Insights"
                  className="joab_common_navlink"
                  onClick={handleScrollToTop}
                > Journal Insights
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
                  path="/Aim-and-scope"
                  element={<AimAndScope/>}
                />
                <Route
                  path="/Abstracting-and-Indexing"
                  element={<AbstractingandIndexing/>}
                />
                <Route
                  path="/Article-Processing-Charge"
                  element={<APC/>}
                />
                <Route
                  path="/Editorial-Board"
                  element={<EditorialBoard/>}
                />
                <Route
                  path="/Journal-Insights"
                  element={<JournalInsights/>}
                />
                <Route
                  path="/Publication-Frequency"
                  element={<PublicationFrequency/>}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default About;
