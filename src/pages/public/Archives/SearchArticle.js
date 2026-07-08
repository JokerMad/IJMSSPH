import React, { useEffect, useState } from "react";
import InsideLayout from "./InsideLayout";
import { useParams } from "react-router-dom";
import articleService from "../../../services/articleService";
import ArticleCard from "../Archives/article/ArticleCard";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../../common_comp/loader";

function SearchText() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const { q } = useParams();
  console.log(q);
  const getSearchedArticle = async (text) => {
    try {
      const response = await articleService.getSearchArticle(text);
      if (response.status === 200) {
        setArticles(response.data.articles);
        setLoading(false);
      }
      console.log(response);
     
    } catch (error) {
      console.error("Error during login:", error);
      setArticles([])
      
    }
  };
  useEffect(() => {
    if (q.length > 0) {
      getSearchedArticle(q);
    }
  }, [q]);

  if (loading) {
    return <Loader />;
  }

  // console.log(articles);

  return (
    <InsideLayout>
      <Container>
        <Row>
          
          <Col md={12} className="px-lg-2 px-2">
            <div className="flex-column">
              {articles.length > 0 ? (
                articles?.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))
              ) : (
                <h2 style={{ textTransform: "capitalize" }} className="mt-3">
                  No Result Found
                </h2>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </InsideLayout>
  );
}

export default SearchText;
