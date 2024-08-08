import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-o5xh.onrender.com/api",
});

export const getArticles = (topic) => {
  return api.get("/articles", { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (id) => {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const getArticleComments = (id) => {
  return api.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleVotes = (id, newVote) => {
  return api.patch(`/articles/${id}`, newVote).then(({ data }) => {
    return data.article;
  });
};

export const postComment = (id, user, comment) => {
  const data = {
    username: user,
    body: comment,
  };

  return api.post(`/articles/${id}/comments`, data).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
