import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const UserCard = ({ user, onLogin }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser(user);
    onLogin(user);
    navigate("/articles");
  };

  return (
    <section className="user-card">
      <h3>{user.username}</h3>
      <img src={user.avatar_url} alt={"Avatar of user"} />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </section>
  );
};

export default UserCard;
