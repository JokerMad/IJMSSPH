import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "../../../common_comp/Layout/Layout";
import AboutSpecialIssues from "./subPartSpecial/AboutSpecialIssues";
import OpenSpecialIssues from "./subPartSpecial/OpenSpecialIssues";
import ProposeSpecialIssue from "./subPartSpecial/ProposeSpecialIssue";
import PublishedSpecialIssues from "./subPartSpecial/PublishedSpecialIssues";


const SpecialIssue = () => {
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
                                    to="/special-issues/About-Special-Issues"
                                    className="joab_common_navlink"
                                >

                                    About Special Issues
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/special-issues/Propose-Special-Issue"
                                    className="joab_common_navlink"
                                >

                                    Propose Special Issue
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/special-issues/Open-Special-Issues"
                                    className="joab_common_navlink"
                                >

                                    Open Special Issues
                                </Nav.Link>
                               
                                <Nav.Link
                                    as={Link}
                                    to="/special-issues/Published-Special-Issues"
                                    className="joab_common_navlink"
                                >

                                    Published Special Issues
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
                                    path="/About-Special-Issues"
                                    element={<AboutSpecialIssues />}
                                />
                                <Route
                                    path="/Open-Special-Issues"
                                    element={<OpenSpecialIssues />}
                                />
                                <Route
                                    path="/Propose-Special-Issue"
                                    element={<ProposeSpecialIssue />}
                                />
                                <Route
                                    path="/Published-Special-Issues"
                                    element={<PublishedSpecialIssues />}
                                />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
};

export default SpecialIssue;
