import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { getTopics } from "../api";

const Topic = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
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
          <Link key={slug} to={`/topics/${slug}`}>
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
  );
};

export default Topic;
