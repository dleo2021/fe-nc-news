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
  console.log(article_id);

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
      <Comments article_id={article_id} />
    </section>
  );
};

export default SingleArticle;
