import { Alert, Card } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { deleteComment } from "../api";
import DeleteIcon from "@mui/icons-material/Delete";

const CommentCard = ({ comment, onDelete }) => {
  const date = new Date(comment.created_at);
  const dateString = date.toString();

  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleDelete = () => {
    deleteComment(comment.comment_id)
      .then(() => {
        setSuccessMessage("Your comment has been deleted.");
        setError("");

        setTimeout(() => {
          onDelete(comment.comment_id);
        }, 2000);
      })
      .catch((err) => {
        setError("Failed to delete the comment. Please try again later.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="comment-card">
      <Card>
        <h4>
          <strong>Author: </strong>
          {comment.author} {}
        </h4>
        <p>{comment.body}</p>
        <p>
          <strong>Votes:</strong> {comment.votes}
        </p>
        <p>
          <strong>Date posted:</strong> {comment.created_at}
        </p>
        {user.username === comment.author && (
          <DeleteIcon
            className="delete-icon"
            onClick={handleDelete}
            color="#00005c"
            sx={{ fontSize: 50 }}
          />
        )}
        {successMessage && <Alert>{successMessage}</Alert>}
        {error && <Alert>{error}</Alert>}
      </Card>
    </div>
  );
};

export default CommentCard;
