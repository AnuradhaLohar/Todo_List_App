// import React from 'react'
// import AddTodo from './AddTodo'
// import DisplayTodo from './DisplayTodo'

// const TodoList = () => {
//   return (
//     <div className=''>
//         <AddTodo/>
//         <DisplayTodo/>
//     </div>

//   )
// }

// export default TodoList

import React, { useContext, useEffect, useState } from "react";
import { databases, databaseId, collectionId } from "../appWrite/DbConfig";
import { AuthContext } from "../context/AuthContext";
import { Query } from "appwrite";

const TodoList = () => {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    if (!user) return;
    try {
      const res = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("userId", user.$id),
      ]);
      setTodos(res.documents);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async () => {
    if (!title.trim() || !user) return;
    await databases.createDocument(databaseId, collectionId, "unique()", {
      title,
      completed: false,
      userId: user.$id,
    });
    setTitle("");
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await databases.updateDocument(databaseId, collectionId, id, {
      completed: !completed,
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await databases.deleteDocument(databaseId, collectionId, id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, [user]);

  return (
    <div>
      <h2>{user ? `Welcome, ${user.name}` : "Loading..."}</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Task..." />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.$id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTodo(t.$id, t.completed)}
            />
            {t.title}
            <button onClick={() => deleteTodo(t.$id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
