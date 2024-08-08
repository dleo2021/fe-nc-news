import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import Topic from "./Topic";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortBy, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <Topic />
      <nav className="sort-nav-bar">
        <FormControl style={{ width: "130px" }}>
          <InputLabel id="sort-by-select-label">Sort By:</InputLabel>
          <Select
            labelId="sort-by-select-label"
            id="sort-by-select"
            value={sortBy}
            label="Sort By"
            onChange={handleSortByChange}
          >
            <MenuItem value="created_at">Date</MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="article_id">Article Id</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "130px" }}>
          <InputLabel id="order-select-label">Order:</InputLabel>
          <Select
            labelId="order-select-label"
            id="order-select"
            value={order}
            label="Order"
            onChange={handleOrderChange}
          >
            <MenuItem value="asc">Asc</MenuItem>
            <MenuItem value="desc">Desc</MenuItem>
          </Select>
        </FormControl>
      </nav>

      <section className="article-card">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
};

export default Articles;
