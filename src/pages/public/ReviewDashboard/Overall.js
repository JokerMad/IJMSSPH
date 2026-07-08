import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Overall = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">Overall Recommendation</h2>
      <hr />

      <p className="joab-common-para my-4">
      Please provide an overall recommendation for the publication of the manuscript as follows:
      </p>

  
      <ul className="mb-3 joab-common-para">
        <li className="mb-2">
            <span className="fw-bold">Accept in Present Form:</span>
         The paper is accepted without any further changes.
        </li>
        <li className="mb-2">
      <span className="fw-bold">  Accept after Minor Revisions:</span> The paper is in principle accepted after revision based on the reviewer’s comments. The authors are given five days for minor revisions.
        </li>
        <li className="mb-2">
       <span className="fw-bold"> Reconsider after Major Revisions:</span> The acceptance of the manuscript would depend on the revisions. The author needs to provide a point by point response or provide a rebuttal if some of the reviewer’s comments cannot be revised. Usually, only one round of major revisions is allowed. The authors will be asked to resubmit the revised paper within ten days and the revised version will be returned to the reviewer for further comments.
        </li>
        <li className="mb-2">
   <span className="fw-bold">   Reject:</span> The article has serious flaws, makes no original contribution, and the paper is rejected with no offer of resubmission to the journal.
        </li>
       
        
       
      </ul>



      <p className="joab-common-para mb-4">
     Note that your recommendation is visible only to journal editors, not to the authors.
      </p>

     
    </Container>
  );
};

export default Overall;
