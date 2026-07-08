import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import fetchApi from "../../../../api-services/apiIndex";
import styles from "./styles.module.css";
import route from "../../../../api-services/routes.config.json";
import { KeywordTags } from "../article/ArticleCard";
import  { useEffect, useState } from "react";
import React from "react";
import Layout from "../../../../common_comp/Layout/Layout";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../../../assests/pdf.png";
import quote from "../../../../assests/quote.png";
import ArticleModal from "./ArticleModal";
import Loader from "../../../../common_comp/loader";

export default function Articleid() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  const { article } = useParams();
  const location = useLocation();
  const articleId = location.state?.id || article;

  console.log(articleId);


  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const headerOffset = 200; // Height of the fixed header (adjust as needed)
    const sectionPosition = section.offsetTop;
    const offsetPosition = sectionPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  console.log(article);
  const navigate = useNavigate();

  const [articleDetails, setArticleDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchArticleDetails = async () => {
    const details = await fetchApi.get("ARTICLEBYID", { articleId });
    if (!details?.articleId && !details?.isRedacted) {
      // navigate("/not-found");
      return;
    }
    setArticleDetails(details);
    setLoading(false);
  };
  useEffect(() => {

    fetchArticleDetails();
  }, [articleId, navigate]); 

  const otherdetails = articleDetails?.otherDetails;



  if (loading) {
    return <Loader/>; 
  }
  const handleDownload=(link)=>{
    window.location.href=link
    setTimeout(()=>{
      fetchArticleDetails()
    },1000)
  }
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col lg={3} sm={12} className={styles.article_card_maindiv}>
          
            <Nav className="flex-column">
       
              {articleDetails?.abstract?.length > 0 ?  (  <Nav.Link
                qa-id="link-abstract"
                onClick={() => handleScroll("abstract")}
                className="joab_common_navlink pb-0"
              >Abstract
               
              </Nav.Link>) :""}


              {articleDetails?.keywords.length > 0 ?  ( <Nav.Link
                qa-id="link-keywords"
                onClick={() => handleScroll("keywords")}
                className="joab_common_navlink pb-0"
              >Keywords
                 
                
              </Nav.Link> ) :""}
            
             
               {articleDetails?.summary?.length > 0? (  <Nav.Link
               qa-id="link-introduction"
                className="joab_common_navlink pb-0"
                onClick={() => handleScroll("introduction")}
              > Introduction  </Nav.Link>) : "" }
            
           
              {articleDetails?.references?.length > 0?  ( <Nav.Link
                qa-id="link-references"
                className="joab_common_navlink pb-0"
                onClick={() => handleScroll("references")}
              > Reference
                </Nav.Link>) :""}
             
              <hr />

              {!articleDetails?.isRedacted && (
                <Nav.Link
                  // as={Link}
                  // to={`${articleDetails?.fileLink}`}
                  onClick={()=>handleDownload(articleDetails?.fileLink)}
                  className="joab_common_navlink p-0"
                >
                  <img src={pdf} alt="pdf" width={30} className="me-2" />
                  Download Article
                </Nav.Link>
              )}
              <hr />

              {articleDetails?.otherDetails && (
              <>

                <Nav.Link
                 onClick={handleShow}
                 className="joab_common_navlink p-0" >
                  <img src={quote} alt="quote" width={30} className="me-2" />
                  Cite this article
                 
                </Nav.Link>
                 <hr />
              
              </>
              )}

              <ArticleModal  show={show} handleClose={handleClose} otherdetails={otherdetails}/>
       

              <Nav.Link
                className="text-black py-0"
                style={{ fontSize: "18px" }}
              >
                {articleDetails?.articleViews || 0}&nbsp;Views
              </Nav.Link>

              <Nav.Link
                className="text-black py-0"
                style={{ fontSize: "18px" }}
              >
                {articleDetails?.downloaded || 0}&nbsp; Downloads
              </Nav.Link>
            </Nav>
          </Col>

          {/* Main Content Area */}
          <Col
            lg={9}
            sm={12}
            className="px-lg-4 px-2"
            style={{
              // padding: "2rem",
              // height: "100vh",
              // overflowY: "auto",
            }}
          >
            <div className={styles.article_details}>
              <h5 className="mb-0 text-muted">
                {articleDetails?.articletype || "Articles"} | {" "}
                <span>Volume {articleDetails?.volume} </span> |
                <span style={{ textTransform: "capitalize" }}>
                  {" "}
                  {articleDetails?.issue}
                </span>
                <span> ({articleDetails?.year}) </span> |
                <span>
                  {" "}
                  Pages {articleDetails?.startPage}-{articleDetails?.endPage}
                </span>{" "}
              </h5>
              <div></div>

              <p className={`mb-0 ${styles.article_title}`}>
                {articleDetails?.title}
              </p>
              <div>
                <div className="m-0 p-0">
                  <p>
                    <sup>1</sup>
                    {articleDetails?.authorDetails?.primary?.name}
                  </p>
                  <p style={{ fontSize: 12 }}>
                    <i>{articleDetails?.authorDetails?.primary?.affiliation}</i>
                  </p>
                </div>
                {articleDetails?.authorDetails?.secondaryAuthors?.map(
                  (ele, index) =>
                    ele.name ? (
                      <div key={index}>
                        <p>
                          <sup>{index + 2}</sup>
                          {ele?.name}
                        </p>
                        <p style={{ fontSize: 12 }}>
                          <i>{ele?.affiliation}</i>
                        </p>
                      </div>
                    ) : null
                )}
              </div>
              <hr className="mt-0" />
              <p className="mb-0">Under a Creative Commons</p>
              <p className="d-flex mb-0">
                <span className={styles.bold}>D.O.I : </span>
                {articleDetails.doi === "0" ? (
                  "-"
                ) : (
                  <Link
                    to={`${route.EXT_DOI}/${articleDetails.doi}`}
                    target="_blank"
                    // className={styles.primary_color}
                  >
                    {articleDetails?.doi}
                  </Link>
                )}
              </p>
              <hr className="mt-0" />

              {articleDetails?.abstract ? (
                <div id="abstract">
                  <h5 className={`${styles.bold} my-0`}>Abstract: </h5>
                  <p> {articleDetails?.abstract} </p>
                </div>
              ) : (
                ""
              )}

              {
                articleDetails?.keywords.length > 0 ? (  <div id="keywords">
                <h5 className={styles.bold}>Keywords: </h5>
                <div
                  className="d-flex gap-2"
                  style={{ flexWrap: "wrap", rowGap: ".5em" }}
                >
                  <KeywordTags keywords={articleDetails?.keywords} />
                </div>
              </div>) : ""
              }

            

              <div id="introduction">
                {/* <h5 className={styles.bold}>References: </h5> */}
                {articleDetails?.summary?.map((item, index) =>
                  item ? (
                    <div key={index}>
                      <div>
                         <h5 className={styles.bold}>{item.mainheading} </h5>
                         <p> {item.subheading}  </p>
                         <p className="mb-0 pb-0">
            {item.details.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
                        
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              {
                articleDetails?.references.length> 0 ? (  <div id="references">
                  <h5 className={styles.bold}>References: </h5>
                  {articleDetails?.references?.map((item, index) =>
                    item ? (
                      <div key={index}>
                 
                          <p> {index + 1}. {item}{" "}  </p>
                      
                      </div>
                    ) : null
                  )}
                </div>) : ""
              }

            
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
