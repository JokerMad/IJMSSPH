import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const editorialBoardData = [
  {
    name: "Editor-in-Chief Scientist",
    designation:
      "Dr. Dnyanesh Madhukar Belekar, Ph.D. (Medical & Health Science) — Dean, Postgraduate Institute of Medical Sciences (P.G.I.M.S.), Navi Mumbai Municipal Corporation; Faculty, Royal College of Surgeons of England",
    link: "",
    summary: (
      <>
        <p>
          <b>Professional Affiliations:</b>
        </p>
        <ul>
          <li>Member - SAGES (Society of American Gastrointestinal and Endoscopic Surgeons), USA</li>
          <li>Safe Chole Task Force Member, SAGES</li>
          <li>Continuing Education Committee Member, SAGES</li>
          <li>New Procedures Task Force Committee Member, SAGES</li>
          <li>Policy Network Member and International Advisor, Royal College of Physicians and Surgeons of Glasgow</li>
          <li>Associate Member - Academy of Master Surgeon Educators (USA)</li>
        </ul>
      </>
    ),
  },
  // {
  //   name: "Associate Editor",
  //   designation: "Ms. Vaishvi Gupta",
  //   link: "",
  //   summary: "Associate Editor — Ms. Vaishvi Gupta.",
  // },
  // {
  //   name: "Associate Editor",
  //   designation: "Mr. Harshit Chaturvedi",
  //   link: "",
  //   summary: "Associate Editor — Mr. Harshit Chaturvedi.",
  // },
  {
    name: "Associate Editor",
    designation: "Dr. Suresh Ughade",
    link: "",
    summary: "Associate Editor — Dr. Suresh Ughade.",
  },
  {
    name: "Associate Editor",
    designation: "Dr. Harshal More",
    link: "",
    summary: "Associate Editor — Dr. Harshal More.",
  },
  {
    name: "Associate Editor",
    designation: "Dr. Mangesh Jabade",
    link: "",
    summary: "Associate Editor — Dr. Mangesh Jabade.",
  },
  {
    name: "Associate Editor",
    designation: "Dr. Srikrishna Dhale",
    link: "",
    summary: "Associate Editor — Dr. Srikrishna Dhale.",
  },
];

const EditorialBoardList = () => {
  return (
      <Container className="mt-4">
        <h1 className="text-center my-5 fw-bold text-blue" >Editorial Board</h1>
        <Row className="g-4">
          {editorialBoardData.map((member, index) => (
            <Col xs={12} key={index}>
              <Card className="shadow border-0 p-2 h-100">
                <Card.Body>
                  <p className="mb-2 fw-bold">{member.name}</p>

                  <details>
                    <summary className="fw-semibold text-muted mb-2">
                      {member.designation}
                    </summary>

                    {member.link ? (
                      <p className="text-muted fw-bold">
                        <Link to={member.link}>{member.link}</Link>
                      </p>
                    ) : null}

                    <div className="text-muted">{member.summary}</div>
                  </details>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
   
  );
};

const EditorialBoard = () => {
  return (
    <div>
        <p>
        The journal is supported by an esteemed editorial board comprising legal scholars, academicians, and professionals from diverse legal fields. The board is responsible for maintaining the journal’s academic integrity, overseeing the peer-review process, and ensuring the publication of high-quality research. 
        </p>
        <p>
        A comprehensive list of the editorial board members can be found here.
        </p>
        <EditorialBoardList/>
    </div>
  )
}

export default EditorialBoard