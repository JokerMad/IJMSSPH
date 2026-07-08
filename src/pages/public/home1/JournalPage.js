import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import Layout from "../../../common_comp/Layout/Layout";
import scope from "../../../assests/mainHome2.jpeg";
import scopus from "../../../assests/image.png";
import { Link } from "react-router-dom";

const JournalPage = () => {
  return (
    <Layout>
      <Container className="my-4">
        <Row>
          {/* LEFT CONTENT */}
          <Col md={8}>
            <Card className="mb-4">
              <Card.Body>
                <h3 className="fw-bold text-blue font-size-21">
                 International journal of Medical science studies and Public Health
                </h3>

                <Row className="mt-3">
                  <Col md={4}>
                    <Card>
                      <Card.Body className="text-center">
                        {/* <div
                          style={{
                            height: "200px",
                            background: "#0d4f8b",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                          }}
                        ></div> */}
                        <img
                          src={scope}
                          alt="scopusimg"
                          className=""
                          style={{ width: "86%", height: "auto" }}
                        />
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={8}>
                    <p>
                      <strong>About the Journal</strong>
                    </p>
                    <p>
                      <strong>Editor In Chief:</strong> Dr. Dnyanesh Madhukar
                      Belekar
                    </p>
                    <p>
                      <strong>Director:</strong> Dr. Roshan Bhaladhare
                    </p>
                    <p>
                      <strong>Abbreviated key title:</strong> Int. J. Med. Sci. Stud. Public Health
                    </p>
                    <p>
                      <strong>Publisher:</strong> Academic sphere publication
                    </p>
                    <p>
                      <strong>Periodicity:</strong> Continuous, One Volume per
                      Year
                    </p>
                    
                  </Col>
                </Row>

                <hr />
                <h3 className="fw-bold text-blue font-size-21">About us</h3>
                <p>
                 The International journal of Medical science studies and Public Health. (IJMSSPH) is an international, peer-reviewed, open-access scholarly journal committed to advancing knowledge across diverse disciplines. The journal serves as a global platform for researchers, academicians, clinicians, scientists, and industry professionals to publish high-quality, original research that bridges disciplinary boundaries and promotes integrated scientific understanding.The journal follows a rigorous double-blind peer-review process, ensuring academic integrity, methodological soundness, and ethical publishing standards. We are committed to transparency, research ethics, and timely publication, providing authors with constructive reviews and global visibility for their work.IJMSSPH is dedicated to promoting research excellence, academic collaboration, and knowledge dissemination at both national and international levels. Through high editorial standards and a diverse international editorial board, the journal aspires to contribute meaningfully to scientific progress and societal development.
                
                </p>
                <p>
                  <i>IJMSSPH – Advancing Knowledge Through Interdisciplinary Excellence.</i>
                </p>
                <hr />
                <Col md={12}>
                  <h3 className="fw-bold text-blue font-size-21">Scope of the Journal</h3>
                  <p>
                    The journal welcomes
                    <strong>
                      {" "}
                      original research articles, review papers, case studies,
                      short communications, and interdisciplinary studies
                    </strong>{" "}
                    across a wide spectrum of academic and scientific
                    disciplines Belekar
                  </p>
                  <p>
                    Medical Sciences,Life Sciences & Biology,Humanities & Social
                    Sciences,Physics & Chemistry,Computer Science & Information
                    Technology,Mathematics & Statistics,Engineering &
                    Technology,Management & Business Studies,History &
                    Interdisciplinary Studies
                  </p>
                </Col>
                <hr />

                <h3 className="fw-bold text-blue font-size-21">Indexed and Abstracted in </h3>
                <Row>
                  <Col sm={2}>
                    <img style={{ width: "100%" }} src={scopus} />
                    <p style={{"font-weight": "600"}}>Under Process</p>
                  </Col>
                  <Col sm={10}>
                    <p style={{ fontSize: "13px" }}>
                      OCLC (WorldCat), World Health Organization – HINARI, Open
                      J-Gate, EZB Nutzeranfragen, CAB Abstracts, Genamics
                      JournalSeek, Scilit, OpenAIRE | EXPLORE, CNKI, Index
                      Copernicus International, Embase
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col md={4}>
            <Card className="mb-3">
              <Card.Header className="fw-bold">Journal Links</Card.Header>
              <ListGroup variant="flush" className="lournalLink">
                <ListGroup.Item action>
                  <Link to="/current-issue">Current Issue</Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/issue-archive">All Archive</Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/about/Aim-and-scope">Aim and Scope</Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/about/Editorial-Board">Editorial Board</Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/about/Abstracting-and-Indexing">
                    Abstracting and Indexing
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/about/Article-Processing-Charge">
                    Article Processing Charge (APC)
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/about/Publication-Frequency">
                    Publication Frequency
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/about/Journal-Insights">Journal Insights</Link>
                </ListGroup.Item>

                <ListGroup.Item action>
                  <Link to="/information/for-authors/copyright-policy">
                    Copyright Policy
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/information/for-authors/publication-ethics">
                    Publication Ethics
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/information/for-authors/ai-policies">
                    AI Policies
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/information/for-authors/guide-for-editor">
                    Guide for Editor
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/information/for-authors/guide-for-reviewer">
                    Guide for Reviewer
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/information/for-authors/open-access-archiving">
                    Open Access Archiving
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/information/for-authors/review-rocess">
                    Review Process
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/information/for-authors/plagiarism-policy">
                    Plagiarism Policy
                  </Link>
                </ListGroup.Item>

                <ListGroup.Item action>
                  <Link to="/special-issues/About-Special-Issues">
                    About Special Issues
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/special-issues/Propose-Special-Issue">
                    Propose Special Issue
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/special-issues/Open-Special-Issues">
                    Open Special Issues
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <Link to="/special-issues/Published-Special-Issues">
                    Published Special Issues
                  </Link>
                </ListGroup.Item>

                <ListGroup.Item action>
                  <Link to="/International-Services">
                    International Services
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mb-3 text-center">
              <Card.Body>
                <h3 className="fw-bold text-blue font-size-21 text-success">CALL FOR PAPERS</h3>
                <p className="small">
                  Submit your manuscript proposals, special issues and abstracts
                  here.
                </p>
                <Button
                  as={Link}
                  to="/submit-article"
                  size="sm"
                  variant="primary"
                >
                  Submit Manuscript
                </Button>
              </Card.Body>
            </Card>

            {/* <Card className="mb-3">
              <Card.Header className="fw-bold">Testimonials</Card.Header>
              <Card.Body>
                <p className="fw-bold mb-1">Dr. Marjorie R. Freedman</p>
                <p className="small">
                  It has been a pleasure working with Lifescience Global. The
                  publication process was timely and professional.
                </p>
                <Button size="sm" variant="outline-secondary">
                  View All Testimonials
                </Button>
              </Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default JournalPage;
