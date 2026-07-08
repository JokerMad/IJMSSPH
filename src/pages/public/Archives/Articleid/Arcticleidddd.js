import { useParams, Link, useNavigate , useLocation} from "react-router-dom";
import fetchApi from "../../../../api-services/apiIndex";
import styles from "./styles.module.css";
import route from "../../../../api-services/routes.config.json";
import PrimaryButton from "../Buttons/Buttons";
import { KeywordTags } from "../article/ArticleCard";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import InsideLayout from "../InsideLayout";

export default function ArticleDetails() {
  const { article } = useParams();
  const location = useLocation(); 
  const articleId = location.state?.id;

  // const titleMatch = article.match(/\d+-(.+)$/i);
  // const title = titleMatch ? titleMatch[1] : null;
  // console.log(title)
  
 
  console.log(article)
  const navigate = useNavigate();  

  const [articleDetails, setArticleDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      const details = await fetchApi.get("ARTICLEBYID", { articleId });
      if (!details?.articleId && !details?.isRedacted) {
        navigate("/not-found"); // Using useNavigate for programmatic navigation
        return;
      }
      setArticleDetails(details);
      setLoading(false);
    };

    fetchArticleDetails();
  }, [articleId, navigate]);  // `navigate` is added to the dependency array

  if (loading) {
    return <p>Loading...</p>; // show loading indicator while fetching data
  }

  return (
    <InsideLayout>
         <div className={styles.article_details}>
      <p className={styles.article_title}>{articleDetails?.title}</p>
      <div>
        <div>
          <p>
            <sup>1</sup>
            {articleDetails?.authorDetails?.primary?.name}
          </p>
          <p style={{ fontSize: 12 }}>
            <i>{articleDetails?.authorDetails?.primary?.affiliation}</i>
          </p>
        </div>
        {articleDetails?.authorDetails?.secondaryAuthors?.map((ele, index) =>
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
      <div className={`d-flex justify-content-between ${styles.download_button}`}>
        <div className="d-flex gap-2">
          <p className={styles.keyword_tags}>
            {articleDetails?.articleViews || 0}&nbsp; <EyeOutlined />
          </p>
          <p className={styles.keyword_tags}>
            {articleDetails?.downloaded || 0}&nbsp;
            <DownloadOutlined />
          </p>
        </div>
        {!articleDetails?.isRedacted && (
          <PrimaryButton
            link={articleDetails?.fileLink}
            params={{ target: "_blank", style: { alignSelf: "flex-start" } }}
          >
            Download Article
          </PrimaryButton>
        )}
      </div>
      <p>
        <span className={styles.bold}>Abstract: </span>
        {articleDetails?.abstract}
      </p>
      <div className="d-flex flex-column">
        <p className={styles.bold}>Keywords:</p>
        <div className="d-flex gap-2" style={{ flexWrap: "wrap", rowGap: ".5em" }}>
          <KeywordTags keywords={articleDetails?.keywords} />
        </div>
      </div>
      <div className="d-flex flex-column">
        <p className={styles.bold}>Paper Details</p>
        <div className={`d-flex justify-content-between ${styles.flex_col}`}>
          <div>
            <p className="d-flex">
              <span className={styles.bold}>D.O.I</span>
              {articleDetails.doi === "0" ? (
                "-"
              ) : (
                <Link
                  to={`${route.EXT_DOI}/${articleDetails.doi}`}
                  target="_blank"
                  className={styles.primary_color}
                >
                  {articleDetails?.doi}
                </Link>
              )}
            </p>
            <p className="d-flex">
              <span className={styles.bold}>Month</span>
              {articleDetails?.month}
            </p>
            <p className="d-flex">
              <span className={styles.bold}>Year</span>
              {articleDetails?.year}
            </p>
          </div>
          <div>
            <p className="d-flex">
              <span className={styles.bold}>Volume</span>
              {articleDetails?.volume}
            </p>
            <p className="d-flex" style={{ textTransform: "capitalize" }}>
              <span className={styles.bold}>Issue</span>
              {articleDetails?.issue}
            </p>
            <p className="d-flex">
              <span className={styles.bold}>Pages</span>
              {articleDetails?.startPage}-{articleDetails?.endPage}
            </p>
          </div>
        </div>
      </div>
    </div>
    </InsideLayout>
  );
}
