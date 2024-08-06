import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-o5xh.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
};

export const getArticleById = (id) => {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};
