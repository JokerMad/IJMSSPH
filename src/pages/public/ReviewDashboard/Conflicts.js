import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Conflicts = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">Potential Conflicts of Interests
      </h2>
      <hr />

      <p className="joab-common-para my-4">
      We ask peer-reviewers to inform the editorial office or journal editor if they hold a conflict of interests that may prejudice the review report, either in a positive or negative way as far as possible before the acceptance of the invitation to peer-review the manuscript. Moreover, with the submission of the peer-review report, we ask the reviewer a written confirmation that he or she did not hold a conflict of interest in reviewing the manuscript.
      </p>

     
    </Container>
  );
};

export default Conflicts;
