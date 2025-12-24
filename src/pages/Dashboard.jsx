import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import TodoList from "../component/TodoList";

const Dashboard = () => {
  const { user, logout, getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  if (user === null) return <p>Loading...</p>;
  if (!user) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="p-4">
      <button onClick={logout}>Logout</button>
      <TodoList />
    </div>
  );
};

export default Dashboard;
