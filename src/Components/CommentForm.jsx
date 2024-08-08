import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { postComment } from "../api";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const CommentForm = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setNewComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currUser = user.username;

    postComment(article_id, currUser, newComment)
      .then((data) => {
        setComments((currComments) => {
          const copyComments = [...currComments];
          copyComments.unshift(data.comment);

          return copyComments;
        });
        setSuccess(true);
        setNewComment("");
        setError("");
      })
      .catch((err) => {
        setError(
          "There was an error with submitting your comment, make sure you are logged in and have typed a comment."
        );
      });
  };

  return (
    <section className="comment-form">
      <p>Add comment:</p>
      <TextField
        id="outlined-basic"
        label="Comment"
        variant="outlined"
        style={{ width: "70%" }}
        multiline
        value={newComment}
        onChange={handleChange}
      />
      <Button
        sx={{
          backgroundColor: "#800000",
          color: "#fff",
          marginLeft: "20px",
          marginTop: "7px",
          "&:hover": {
            backgroundColor: "#660000",
          },
        }}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <p>{success ? "Your comment has been posted :)" : ""}</p>
      {error && <p>{error}</p>}
    </section>
  );
};

export default CommentForm;
