import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <section className="single-article">
      <SingleArticleCard key={article.article_id} article={article} />
    </section>
  );
};

export default SingleArticle;
