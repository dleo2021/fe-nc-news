import { Card, CardHeader, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Link to={`/articles/${article.article_id}`}>
        <CardHeader title={article.title} />
      </Link>
      <CardMedia
        component="img"
        image={article.article_img_url}
        alt={article.title}
        className="card-image"
      />
      <h2>Author: {article.author}</h2>
      <p>
        Votes: {article.votes} <br />
        Comments: {article.comment_count}
      </p>
    </Card>
  );
};

export default ArticleCard;
