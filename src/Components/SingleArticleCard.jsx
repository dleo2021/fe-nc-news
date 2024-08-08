import ArticleVotes from "./ArticleVotes";

const SingleArticleCard = ({ article }) => {
  const date = new Date(article.created_at);
  const dateString = date.toString();

  return (
    <div className="single-article-card">
      <h2>{article.title}</h2>
      <img
        className="single-article-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="circular">{article.topic}</p>
      <h3>Author: {article.author}</h3>
      <p>Date: {dateString}</p>
      <ArticleVotes article={article} />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticleCard;
