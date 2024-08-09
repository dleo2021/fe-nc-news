import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Tooltip } from "@mui/material";
import { Logout } from "@mui/icons-material";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
  };
  return (
    <header>
      <h1 className="heading">NC News</h1>
      {user.username === undefined ? (
        ""
      ) : (
        <p className="welcome-p">Welcome {user.username}</p>
      )}
      <nav className="header-nav-bar">
        <Link to="/" className="nav">
          <Tooltip title="Home" arrow>
            <div className="icon-container">
              <HomeIcon
                className="home-icon"
                color="#00005c"
                sx={{ fontSize: 40 }}
              />
              <span>Home</span>
            </div>
          </Tooltip>
        </Link>
        <Link to="/articles" className="nav">
          <Tooltip title="articles" arrow>
            <div className="icon-container">
              <ArticleIcon
                className="home-icon"
                color="#00005c"
                sx={{ fontSize: 40 }}
              />
              <span>Articles</span>
            </div>
          </Tooltip>
        </Link>
        <Link to="/users" className="nav">
          <Tooltip title="Login" arrow>
            <div className="icon-container">
              <LoginIcon
                className="home-icon"
                color="#00005c"
                sx={{ fontSize: 40 }}
              />
              <span>Login</span>
            </div>
          </Tooltip>
        </Link>
        <Link to="/" className="nav">
          <Tooltip title="Logout" arrow>
            <div className="icon-container">
              <LogoutIcon
                onClick={handleLogout}
                className="home-icon"
                color="#00005c"
                sx={{ fontSize: 40 }}
              />
              <span>Logout</span>
            </div>
          </Tooltip>
        </Link>
      </nav>
      {user.username === undefined ? (
        ""
      ) : (
        <img
          className="avatar-header"
          src={user.avatar_url}
          alt={`Avatar image of ${user.username}`}
        />
      )}
    </header>
  );
};

export default Header;
