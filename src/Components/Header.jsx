import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NC News</h1>
      <nav>
        <Link to="/articles" className="nav">
          Home
        </Link>
        <Link to="/users" className="nav">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
