import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
import route from "../../../../api-services/routes.config.json";
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import { DownloadIcon } from '../../../../assests/download';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


function ArticleCard({ article }) {
  console.log(article)
  const navigate = useNavigate();
  // console.log(article?.issue?.split(" ")[1])
  // const issue = article?.issue?.split(" ")[1]
  
  const handleCardClick = () => {
    if (article?.volume) {
      const formattedTitle = article.title.toLowerCase().replace(/\s+/g, "-");
      navigate(`/a/${formattedTitle}`, { state: { id: article.articleId } });
    } else {
      navigate(`/current-issue/${article.articleId}`);
    }
  };

  return (
    <div className={`d-flex flex-column  my-4  ${styles.article_card}`} onClick={handleCardClick}>
    <div className="d-flex justify-content-between">
      {article?.isRedacted ? (
        <p style={{ fontWeight: 600 }}>Article Retracted</p>
      ) : (
        article.doi !== '0' && (
          <a
            href={`${route.EXT_DOI}/${article.doi}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={styles.primary_color}
          >
            {article.doi}
          </a>
        )
      )}
      <p style={{ fontSize: '.8em', width: '100%', textAlign: 'right' }}>
        {article.startPage}-{article.endPage}
      </p>
    </div>
    {!article?.isRedacted && (
      <>
        <p style={{ fontWeight: 600 }}>{article.title}</p>
        <p>
          <i>{article.primaryAuthor}</i>
        </p>
        <div className="d-flex gap-2" style={{ flexWrap: 'wrap', rowGap: '.3em' }}>
          <KeywordTags keywords={article.keywords} />
        </div>
        <div className=" d-flex justify-content-between" style={{ paddingTop: '.5em' }}>
          <div className="d-flex gap-2">
            <p className={styles.keyword_tags}>
              {article.articleViews || 0}&nbsp; <EyeOutlined />
            </p>
            <p className={styles.keyword_tags}>
              {article.downloaded || 0}&nbsp;
              <DownloadOutlined />
            </p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href={`${process.env.REACT_APP_BASE_URL}download?articleId=${article.articleId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <DownloadIcon />
          </a>
        </div>
      </>
    )}
  </div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    doi: PropTypes.string.isRequired,
    articleId: PropTypes.number.isRequired,
    articleViews: PropTypes.number.isRequired,
    downloaded: PropTypes.number.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    primaryAuthor: PropTypes.string.isRequired,
    endPage: PropTypes.number.isRequired,
    startPage: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    volume: PropTypes.string,
    issue: PropTypes.string,
    isRedacted: PropTypes.bool,
  }).isRequired,
};

export function KeywordTags({ keywords }) {
  return (
    <>
      {keywords.map((tag, index) => {
        if (tag) {
          return (
            <p key={index} className={styles.keyword_tags} style={{ fontSize: '0.8em' }}>
              <i>{tag}</i>
            </p>
          );
        }
      })}
    </>
  );
}

KeywordTags.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleCard;
