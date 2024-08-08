import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import Topic from "./Topic";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Topic />
      <section className="article-card">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
};

export default Articles;
