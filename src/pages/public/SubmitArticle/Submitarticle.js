import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../../common_comp/Layout/Layout";


const Submitarticle = () => {
  return (

    <Layout>
    <Container className="my-5 px-3">

      <h1 className=" display-6 fw-bold text-center mb-5">Article Submission Process</h1>
      <Row>
        {/* Online Submission Portal Section */}
        <Col md={6}>
          <Card className="shadow-sm border-0  text-white h-100 p-2 jab_commmon_bgcolor">
            <Card.Body>
              <Card.Title className="mb-3">Submission via Online Submission Portal</Card.Title>
              <Card.Text>
                Authors are encouraged to submit their articles through our dedicated submission portal.
              </Card.Text>
              <ul>
                <li>
                  <strong>Efficiency and Speed:</strong> Scholar Manuscript streamlines the submission process, minimizing administrative delays and providing authors with a swift and efficient route to submit their work.
                </li>
                <li>
                  <strong>Real-Time Tracking:</strong> Authors can easily monitor the status of their submission in real-time, from the initial submission through the review process. This ensures transparency and minimizes uncertainty.
                </li>
                <li>
                  <strong>Enhanced Communication:</strong> The portal serves as a centralized platform for communication between authors and the editorial team, fostering clear and direct communication. This reduces the likelihood of miscommunication.
                </li>
              </ul>
              <Button variant="light" className="mt-3" href="/author/article-submission">SUBMIT NOW</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Submission through Email Section */}
        <Col md={6}>
          <Card className="shadow-sm border-0 h-100 p-2">
            <Card.Body>
              <Card.Title className="mb-3">Submission through Email</Card.Title>
              <Card.Text>
                Authors facing challenges with our dedicated submission portal may opt for email submission.
              </Card.Text>
              <ul>
                <li>
                  <strong>Flexibility for Authors:</strong> While email submission offers flexibility, it lacks the streamlined efficiency of the submission portal, potentially leading to delays in processing.
                </li>
                <li>
                  <strong>Limited Tracking:</strong> Unlike the real-time tracking available in the portal, email submissions may lack a comprehensive tracking system, causing uncertainty about the status of the manuscript.
                </li>
                <li>
                  <strong>Potential Communication Barriers:</strong> Email submissions may result in scattered communication, increasing the risk of miscommunication and delays.
                </li>
              </ul>
              <Card.Text>
                <strong>NOTE:</strong> Kindly attach your article as a single PDF file to the email for smoother processing.
              </Card.Text>
              <Button
              
                className="mt-3 jab_commmon_bgcolor border-0"
                href="mailto:submission@azpharmjournal.com"
              >
                submission@IJMSSPH.com
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* row 2 */}
      <Row className="pt-md-4 mt-md-5 pt-2 mt-2">
        <Col md={6} sm={12} className="px-4 my-3">
        <h5 className="fw-bold">Before submitting your manuscript, please ensure the following:</h5>
        <ul>
            <li>Maintain overall plagiarism under 30%, with no more than 3% from a single source.</li>
            <li>Confirm that the manuscript is neither published nor under consideration elsewhere.</li>
            <li>Familiarize yourself with our Aim and Scope.</li>
            <li>Review the Guide for Authors provided.</li>
            <li>Understand and adhere to our Open Access Policy.</li>
            <li>Familiarize yourself with our Copyrights Policy.</li>
        </ul>
        </Col>
        <Col md={6} sm={12} className="px-4 my-3">
        <h5 className="fw-bold">International journal of Medical science studies and Public Health. Journal adheres to ethical guidelines, including:
        </h5>
        <ul>
            <li>Policy Statement on Ethical Guidelines by the American Mathematical Society.</li>
            <li>Best Current Practices from the Journals of the International Mathematical Union
            </li>
            <li>Code of Practice by the European Mathematical Society (EMS) Ethics Committee</li>
            <li>Review the Guide for Authors provided.</li>
            <li>EMS Ethics Committee Comments on the EMS Code of Practice
            </li>
            <li>Guidelines by the Committee on Publication Ethics (COPE)
            .</li>
        </ul>
        </Col>
      </Row>
      <p className="my-2 px-3">For any inquiries, please refer to our FAQ section or contact us at support@IJMSSPH.com.
      </p>
    </Container>
  
    </Layout>
 
  );
};

export default Submitarticle;
