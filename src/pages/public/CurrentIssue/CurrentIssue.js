import React, { useEffect, useState } from "react";
import fetchApi from "../../../api-services/apiIndex";
import ArticleCard from "../Archives/article/ArticleCard";
import InsideLayout from "../Archives/InsideLayout";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../../common_comp/loader";

function CurrentIssue() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi.get("CURRENTISSUE");
        console.log(response);
        if (response.articles) {
          setArticles(response.articles);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }


  console.log(articles);
  return (
    <InsideLayout>
      <Container>
        <Row>
          <Col md={3} className=" py-4">
            <h4 style={{ textTransform: "capitalize" }}>Current Issue</h4>
          </Col>
          <Col md={9} className="px-lg-2 px-2">
            <div className="flex-column">
              {articles?.map((article, index) => (
                !article.isRedacted&&
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </InsideLayout>
  );
}

export default CurrentIssue;
