import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import Users from "./Components/Users";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
