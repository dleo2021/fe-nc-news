import { useEffect, useState } from "react";
import { getUsers } from "../api";
import UserCard from "./UserCard";
import Loader from "./Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    getUsers().then((userData) => {
      setUsers(userData);
      setIsLoading(false);
    });
  }, []);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  if (isLoading) return <Loader />;

  return (
    <section>
      <h2 className="user-subheading">
        Welcome{loggedInUser ? ` ${loggedInUser.username}` : ""}
      </h2>
      <div className="user-card-container">
        {users.map((user) => {
          return (
            <UserCard key={user.username} user={user} onLogin={handleLogin} />
          );
        })}
      </div>
    </section>
  );
};

export default Users;
