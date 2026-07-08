import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const InvitationReview = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">Invitation to Review</h2>
      <hr />

      <p className="joab-common-para my-4">
        Manuscripts submitted to our journals are reviewed by at least two to
        three external subject experts. We ask peer-reviewers to evaluate the
        quality of the manuscript and to provide a recommendation to the
        handling editor of the manuscript on whether a manuscript can be
        accepted, requires revisions or should be rejected.
      </p>

      <p className="joab-common-para mb-4 fw-bold text-muted">
        We ask invited peer-reviewers kindly to:
      </p>
      <ul className="mb-3 joab-common-para mb-4">
        <li className="mb-2">
          Accept or decline any invitations within 48 hours after receipt of the
          invitation
        </li>
        <li className="mb-2">
          When possible suggest alternative reviewers if you decline an
          invitation
        </li>
        <li className="mb-2">
          Request an extension of the reviewing time only in case you need more
          time to finish your peer-review report
        </li>
        <li className="mb-2">
          Make sure the article you have been asked to review truly matches your
          expertise.
        </li>
        <li className="mb-2">Avoid a potential conflict of interest.</li>
        <li className="mb-2">
          Keep the information you get from the manuscript you review
          confidential also after the finish of the review process.
        </li>
        <li className="mb-2">
          Look during the review process at potential plagiarism, structure of
          the manuscript, originality, language, statistical errors, conclusion,
          and discussions.
        </li>
        <li className="mb-2">
          Provide a clear and summary of your review result (comments).
        </li>
        <li className="mb-2">Be critical and justify your criticism.</li>
        <li className="mb-2">
          Do not recommend the citation of your own work or close colleagues
          when it is not clearly necessary to improve the quality of the
          manuscript under review.
        </li>
        <li className="mb-2">
          Your comments should not include an indication of whether you think
          the article should be accepted for publication. For further guidance
          about writing a critical review, please refer to the following
          documents
        </li>
        <li className="mb-2">
          Check the aims and scope of the journal and make sure that your
          comment complies with the policies of the journal.
        </li>
        <li className="mb-2">Never reveal your identity as a peer-reviewer</li>
      </ul>

      <p className="joab-common-para mb-4 fw-bold text-muted">
        As part of the peer-review process, reviewers are asked:
      </p>

      <ul className="mb-3 joab-common-para">
        <li className="mb-2">
          To rate the originality, significance, quality of the presentation,
          scientific soundness, interest to the readers, overall merit and
          English level of the manuscript
        </li>
        <li className="mb-2">
          To provide an overall recommendation on the scientific quality of the
          manuscript
        </li>
        <li className="mb-2">
          To provide a detailed, constructive online peer-review report via
          ManuscriptManager
        </li>
      </ul>
    </Container>
  );
};

export default InvitationReview;
