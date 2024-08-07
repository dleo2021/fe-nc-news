import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import Users from "./Components/Users";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
