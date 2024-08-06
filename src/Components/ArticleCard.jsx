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
    </Card>
  );
};

export default ArticleCard;
