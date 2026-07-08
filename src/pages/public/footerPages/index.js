import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "../../../common_comp/Layout/Layout";
import PrivacyPolicy from "./PrivacyPolicy";
import TermandConditions from "./TermsandConditions";


const FooterPage = () => {
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
                                    to="/info/Privacy-Policy"
                                    className="joab_common_navlink"
                                >

                                    Privacy Policy
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/info/Term-and-Conditions"
                                    className="joab_common_navlink"
                                >

                                    Term and Conditions
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
                                    path="/Privacy-Policy"
                                    element={<PrivacyPolicy />}
                                />
                                <Route
                                    path="/Term-and-Conditions"
                                    element={<TermandConditions />}
                                />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
};

export default FooterPage;
