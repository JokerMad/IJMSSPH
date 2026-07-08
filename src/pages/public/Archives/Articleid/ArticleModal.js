import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import Modal from "react-bootstrap/Modal";

function ArticleModal({ handleClose, show, otherdetails }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered className={styles.jab_article_modal}>
        <Modal.Header closeButton>
          <Modal.Title className="py-0">Cite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {Array.isArray(otherdetails) && otherdetails.length > 0 ? (
              otherdetails.map((item, index) => (
               <>
                <Row key={index} className="mb-2">
                  <Col md={3}>
                    <strong>{item.mainheading} :</strong>
                  </Col>
                  <Col md={9} className="px-3">
                    <p className={styles.modal_para}>{item.details}</p>
                  </Col>
                </Row>
                <hr className=""/>
               </>
              ))
            ) : (
              <p>No details available.</p>
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ArticleModal;
