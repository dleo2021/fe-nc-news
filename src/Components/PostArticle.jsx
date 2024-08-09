import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { TextField, Button, FormControl } from "@mui/material";
import { postArticle, getTopics } from "../api";

const PostArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState("");
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  const handleSubmit = (event) => {
    if (!user) {
      setError("You need to be logged in to post an article");
    }

    if (!topics.includes(topic)) {
      setError(
        "Your article must have a topic of coding, football or cooking."
      );
    }

    postArticle({ author: user.username, title, body, topic })
      .then(() => {
        setTitle("");
        setBody("");
        setTopic("");
        setError("");
      })
      .catch(() => {
        setError("Failed to post article, please try again later.");
      });
  };

  return (
    <div>
      <h1>Post a New Article</h1>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Body"
          multiline
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Post Article
      </Button>
    </div>
  );
};

export default PostArticle;
