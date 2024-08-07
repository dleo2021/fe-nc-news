import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-o5xh.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
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
