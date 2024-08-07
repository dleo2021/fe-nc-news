import { useState } from "react";
import { patchArticleVotes } from "../api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const ArticleVotes = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [error, setError] = useState("");

  const handlePositiveVote = () => {
    const updatedVotes = votes + 1;
    setVotes(updatedVotes);

    const incVotes = {
      inc_votes: 1,
    };

    patchArticleVotes(article.article_id, incVotes)
      .then((response) => {
        setVotes(response.votes);
      })
      .catch((err) => {
        setError("There was an error with voting, please try again later.");
        setVotes(votes);
      });
  };

  const handleNegativeVotes = () => {
    const updatedVotes = votes - 1;
    setVotes(updatedVotes);

    const incVotes = {
      inc_votes: -1,
    };

    patchArticleVotes(article.article_id, incVotes)
      .then((response) => {
        setVotes(response.votes);
      })
      .catch((err) => {
        setError("There was an error with voting, please try again later.");
        setVotes(votes);
      });
  };

  return (
    <section>
      <p>Votes: {votes}</p>
      <div className="vote-icons">
        <ThumbUpIcon
          className="icon"
          onClick={() => handlePositiveVote()}
        ></ThumbUpIcon>
        <ThumbDownIcon
          className="icon"
          onClick={() => handleNegativeVotes()}
        ></ThumbDownIcon>
      </div>
      {error && <p>{error}</p>}
    </section>
  );
};

export default ArticleVotes;
