import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetchApi from "../../../api-services/apiIndex";
import ArticleCard from "./article/ArticleCard";
import InsideLayout from "./InsideLayout";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../../common_comp/loader";

function Issue() {
  const { issues } = useParams();

  const volumeMatch = issues.match(/vol-(\d+)/i);
  const issueMatch = issues.match(/no-(\d+)/i);
  console.log(issues, volumeMatch, issueMatch);

  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extracted values
  const volume = volumeMatch ? volumeMatch[1] : null;
  const issue = issueMatch ? `issue ${issueMatch[1]}` : null;

  console.log(volume, issue);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await fetchApi.get("ARTICLES", {
          volume,
          issue,
        });

        if (data?.articles) {
          setArticles(data.articles);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        // navigate("/not-found");
      }
    };

    fetchArticles();
  }, [volume, issue, navigate]);

  if (loading) {
    return <Loader />;
  }

  console.log(articles);
  return (
    <InsideLayout>
      <Container>
        <Row>
          <Col md={3} className=" py-4">
            <h4 style={{ textTransform: "capitalize" }}>
              {volume ? `Volume ${volume} ${issue} ` : ``}
            </h4>
          </Col>
          <Col md={9} className="px-lg-2 px-2">
            <div className="flex-column">
              {articles?.map((article, index) => (
                !article.isRedacted&&
                <ArticleCard
                  key={index}
                  article={{ ...article, volume, issue }}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </InsideLayout>
  );
}

export default Issue;
