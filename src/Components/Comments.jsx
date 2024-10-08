import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleDeleteComment = (comment_id) => {
    setComments((currComments) => {
      return currComments.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
  };

  if (isLoading) return <Loader />;

  return (
    <section className="comments-subheading">
      <h2>Comments:</h2>
      <CommentForm setComments={setComments} article_id={article_id} />
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            onDelete={handleDeleteComment}
          />
        );
      })}
    </section>
  );
};

export default Comments;
