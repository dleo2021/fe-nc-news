import { Card, CardHeader, CardMedia } from "@mui/material";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardHeader title={article.title} />
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
