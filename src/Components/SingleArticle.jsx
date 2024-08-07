import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import SingleArticleCard from "./SingleArticleCard";
import Loader from "./Loader";
import Comments from "./Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <Loader />;

  return (
    <section className="single-article">
      <SingleArticleCard key={article.article_id} article={article} />
      <Comments />
    </section>
  );
};

export default SingleArticle;
