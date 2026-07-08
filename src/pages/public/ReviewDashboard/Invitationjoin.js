import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Invitationjoin = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">
        Invitation to Join our Peer-Reviewer Database
      </h2>
      <hr />

      <p className="joab-common-para my-4">
        If you are interested in reviewing articles for one or more of our
        journals, please register your contact details, including your ORCID
        identifier, institutional affiliation, and 5-6 keywords in line with
        your expertise on the following page.
      </p>

      <p className="joab-common-para mb-4">
        Would you like to review for us? Contact us via{" "}
        <a href="mailto:info@journalofappliedbioanalysis.com">email</a>{" "}
      </p>
    </Container>
  );
};

export default Invitationjoin;
