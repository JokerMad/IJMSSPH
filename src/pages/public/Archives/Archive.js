import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import fetchApi from "../../../api-services/apiIndex"; // Adjust the path as per your file structure
import InsideLayout from "./InsideLayout";
import styles from "./styles.module.css";
import Loader from "../../../common_comp/loader";

function Archives() {
  const [volumesList, setVolumesList] = useState([]);
    const [loading, setLoading] = useState(true);
  console.log(volumesList);

  useEffect(() => {
    const fetchVolumes = async () => {
      try {
        const data = await fetchApi.get("VOLUMES");
        setVolumesList(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching volumes list:", error);
      }
    };

    fetchVolumes();
  }, []);

  if (loading) {
    return <Loader/>; 
  }

  return (
    <InsideLayout>
      <Container   className={styles.jab_archive}>
        <Row>
          <Col md={3} className=" p-3">
            <h4>All Volumes & Issues</h4>
            {/* <ul className="list-unstyled">
              {volumesList?.map((ele, idx) => (
                <li key={idx}>
                  <a href={`#accordion-${idx}`} className="text-decoration-none">
                    Volume {ele.volume} ({ele.year})
                  </a>
                </li>
              ))}
            </ul> */}
          </Col>

          <Col md={9} className="px-lg-5 px-2">
            <Accordion defaultActiveKey="0">
              {volumesList.length>0&&volumesList?.map((ele, idx) => (
                <Accordion.Item eventKey={idx.toString()} key={ele.volume} className="border-0 border-bottom">
                  <Accordion.Header className={styles.jab_acc_header}>
                    {`Volume ${ele.volume} (${ele.year})`}
                  </Accordion.Header>
                  <Accordion.Body className="p-2">
                    <div>
                      <h6 className="fw-bold">Issues</h6>
                      <ul    className={styles.jab_archive_ul}>
                        {ele.issue?.map((issue, index) => (
                          <li key={index}>
                            <Link
                              to={`/International-Journal-of-Interdisciplinary-Studies-and-System-Science-vol-${ele.volume}-no-${issue.split("-")[1]}`}
                              style={{ textTransform: "capitalize" }}
                            >
                              {issue}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {ele?.specialIssue?.length > 0 && (
                        <>
                          <h6 className="fw-bold">Special Issues</h6>
                          <ul  className={styles.jab_archive_ul}>
                            {ele.specialIssue?.map((issue, index) => (
                              <li key={1000 + index}>
                                <Link
                                  to={`/issue-archive/volume-${ele.volume}/${issue.toLowerCase()}`}
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {issue}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </InsideLayout>
  );
}

export default Archives;
