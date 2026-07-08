import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const ArticleProcess = () => {
  return (
    <Container>
    <h2 className="display-6 fw-bold my-4">
      Article Processing Charges (APC)
    </h2>
    <hr />

    <h5 className="fw-bolder mt-4">Regular Article</h5>

    <p className="joab-common-para my-3">
      Incl. Research, Review, Methodology, and Short Communication. 1019
      euros
    </p>
    <h5 className="fw-bolder mt-4">Editorial Article</h5>
    <p className="joab-common-para mb-3">
      Incl. Commentary, Letter to Editor, and Interview 719 euros
    </p>
    <h5 className="fw-bolder mt-4"> Special Issue Article</h5>
    <p className="joab-common-para mb-3">
      Reduced APC for Research, Review, Methodology, and Short Communication
      719 euros
    </p>
  </Container>
  );
};

export default ArticleProcess;
