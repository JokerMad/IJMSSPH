import React from "react";
import Layout from "../../../common_comp/Layout/Layout";
import { Container, Row, Col, Card } from "react-bootstrap";
import doctor from "../../../assests/doctor.png";
import ijiss from "../../../assests/ijiss.png";
import bg from "../../../assests/bg.png";
import { Link } from "react-router-dom";

const OtherServices = () => {
  return (
    <Layout>
      <div className="medico-wrapper">
        {/* HERO / BANNER */}
        <div className="medico-hero">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h1>Medico-Healthcare International</h1>
                <p className="tagline">
                  Excellence in Healthcare Accreditation, Medical Education &
                  Quality Systems
                </p>
                <Link to={'/contact-us'}>Expert Consultant</Link>
              </Col>
              <Col md={6} className="text-center">
                <div className="doctor-placeholder overflow-hidden">
                  <img
                    src={doctor}
                    alt="Doctors"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="otherService-bg" style={{ backgroundImage: `url(${bg})` }}>
          {/* ABOUT */}
          <Container className="section">
            <h3>About Us</h3>
            <p>
              Medico-Healthcare International is a trusted healthcare consulting partner delivering excellence in hospital accreditation, medical education, and quality systems. We help hospitals and medical institutions achieve NABH, JCI, NABL, and DNB accreditation readiness with confidence and clarity.Our expert-driven approach combines global standards, practical implementation, and hands-on training to improve patient safety, clinical quality, academic compliance, and institutional performance. From documentation and gap analysis to inspections and audits, we provide end-to-end solutions tailored to each organization’s needs.
            </p>
          </Container>

          {/* VISION & MISSION */}
          <Container className="section">
            <Row>
              <Col md={6}>
                <Card className="info-card">
                  <Card.Header>Vision</Card.Header>
                  <Card.Body>
                    To empower healthcare institutions with globally benchmarked
                    quality systems, strong academic frameworks, and sustainable
                    patient-centered care models.
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="info-card">
                  <Card.Header>Mission</Card.Header>
                  <Card.Body>
                    To deliver reliable, ethical, and research-driven consulting
                    services.
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          {/* CORE SERVICES */}
          <Container className="section">
            <h3>Core Services</h3>
            <Row>
              <Col md={6}>
                <Card className="service-card">
                  <Card.Body>
                    <h5>🏥 Hospital Accreditation Services</h5>
                    <ul>
                      <li>
                        NABH Accreditation (India) – Entry Level, Progressive &
                        Full Accreditation
                      </li>
                      <li>
                        JCI Accreditation (Global) – International standards for
                        patient safety and quality
                      </li>
                      <li>
                        NABL Accreditation – Laboratory accreditation support
                      </li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card className="service-card">
                  <Card.Body>
                    <h5>🛡 Quality & Patient Safety Systems</h5>
                    <ul>
                      <li>Hospital Quality Management Systems (QMS)</li>
                      <li>Infection Prevention & Control Programs</li>
                      <li>Patient Safety Culture Assessment & Improvement</li>
                      <li>Clinical audit systems and outcome monitoring</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="service-card">
                  <Card.Body>
                    <h5>🎓 Medical Education & Academic Consulting</h5>
                    <ul>
                      <li>
                        DNB Medical Education Consultancy for Hospitals (India)
                      </li>
                      <li>
                        Support for new DNB seat application & inspection
                        readiness
                      </li>
                      <li>
                        MBBS and MD/MS Consultancy for Institutes (Global
                        support for medical seat application & inspection
                        readiness)
                      </li>
                      <li>
                        Academic policy framing, faculty readiness & compliance
                      </li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card className="service-card">
                  <Card.Body>
                    <h5>💻 Digital Health & Hospital Systems</h5>
                    <ul>
                      <li>Hospital IT & Digital Transformation</li>
                      <li>Health System Optimization</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          {/* TRUST SECTION */}
          <div className="trust-section">
            <Container>
              <Row className="align-items-center">
                <Col md={4} className="text-center">
                  <img
                    src={ijiss}
                    alt="IJMSSPH"
                    style={{ width: "65%", height: "auto" }}
                  />
                </Col>
                <Col md={8}>
                  <h4>Trusted Partner for Quality Healthcare</h4>
                  <p>
                    We partner with hospitals to guide them through NABH, JCI,
                    and DNB accreditation processes, ensuring highest standards
                    in healthcare quality and education.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OtherServices;
