import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";
import { Tooltip } from "@mui/material";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>NC News</h1>
      {user.username === undefined ? (
        ""
      ) : (
        <img
          className="avatar-header"
          src={user.avatar_url}
          alt={`Avatar image of ${user.username}`}
        />
      )}
      <nav className="header-nav-bar">
        <Link to="/" className="nav">
          <Tooltip title="Home" arrow>
            <HomeIcon
              className="home-icon"
              color="#00005c"
              sx={{ fontSize: 50 }}
            />
          </Tooltip>
        </Link>
        <Link to="/articles" className="nav">
          <Tooltip title="articles" arrow>
            <ArticleIcon
              className="home-icon"
              color="#00005c"
              sx={{ fontSize: 50 }}
            />
          </Tooltip>
        </Link>
        <Link to="/users" className="nav">
          <Tooltip title="Login" arrow>
            <LoginIcon
              className="home-icon"
              color="#00005c"
              sx={{ fontSize: 50 }}
            />
          </Tooltip>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
