import { useState, useEffect } from "react";
import { getArticles, getTopics } from "../api";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([0]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

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
      <section>
        <Link to="/articles">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#800000",
              color: "#fff",
              marginLeft: "20px",
              marginTop: "7px",
              "&:hover": {
                backgroundColor: "#660000",
              },
            }}
          >
            All
          </Button>
        </Link>
        {topics.map(({ slug }) => {
          return (
            <Link key={slug} to={`/articles/${slug}`}>
              <Button
                variant="contained"
                className="topic-nav-link"
                sx={{
                  backgroundColor: "#800000",
                  color: "#fff",
                  marginLeft: "20px",
                  marginTop: "7px",
                  "&:hover": {
                    backgroundColor: "#660000",
                  },
                }}
              >
                {slug}
              </Button>
            </Link>
          );
        })}
      </section>
      <section className="article-card">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
};

export default Articles;
