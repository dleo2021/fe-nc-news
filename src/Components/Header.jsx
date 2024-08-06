import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NC News</h1>
      <nav>
        <Link to="/articles">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
