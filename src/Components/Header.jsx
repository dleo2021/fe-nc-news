import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

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
      <nav>
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/articles" className="nav">
          Articles
        </Link>
        <Link to="/users" className="nav">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
