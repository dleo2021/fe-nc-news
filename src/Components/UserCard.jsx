import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const UserCard = ({ user, onLogin }) => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(user);
    onLogin(user);
  };

  return (
    <div>
      <h3>{user.username}</h3>
      <img src={user.avatar_url} alt={"Avatar of user"} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserCard;
