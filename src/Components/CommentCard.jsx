import { Card } from "@mui/material";

const CommentCard = ({ comment }) => {
  console.log(comment);
  const date = new Date(comment.created_at);
  const dateString = date.toString();

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
      </Card>
    </div>
  );
};

export default CommentCard;
