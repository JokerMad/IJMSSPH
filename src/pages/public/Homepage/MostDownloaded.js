import React, { useEffect, useState } from "react";
// import InsideLayout from "../Archives/InsideLayout";
import { useParams } from "react-router-dom";
import articleService from "../../../services/articleService";
import ArticleCard from "../Archives/article/ArticleCard";
import { Container, Row, Col } from "react-bootstrap";

function MostDownloaded() {
  const [articles, setArticles] = useState([]);

  const { q } = useParams();
  console.log(q);
  const getMostDownload = async () => {
    try {
      const response = await articleService.getMostDownloadArticle();
      console.log('Vresponse-',response)
      if (response.status == 200) {
        setArticles(response.data);
      }
      console.log(response);
    } catch (error) {
      console.error("Error during login:", error);
      setArticles([]);
    }
  };
  useEffect(() => {
      getMostDownload();
  }, []);

  console.log(articles);

  return (
    <Container>
    <Row>
      <Col md={12} className="px-lg-2 px-2 mx-auto">
        <div className="flex-column">
        
       
          <Row>
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <Col key={index} md={4} className="mb-1">
                  <ArticleCard article={article} />
                </Col>
              ))
            ) : (
              <h2 style={{ textTransform: "capitalize" }} className="mt-3">
                No Result Found
              </h2>
            )}
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
  );
}

export default MostDownloaded;
