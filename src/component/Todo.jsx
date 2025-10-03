import React, { useState } from 'react'
import { FaTrash, FaSave } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { markCompleted, removeTodo, updateTodo } from '../features/todoSlice';

const Todo = ({ id, todoText, status }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [userInput, setUserInput] = useState(todoText)
  const dispatch = useDispatch()

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id, userInput }))
    setIsEditing(false)
  }

  return (
    <div
      key={id}
      className={`flex justify-between items-center p-4 rounded-lg shadow-md transition-all
       ${status ? "bg-green-600/20 border border-green-500" : "bg-gray-800 border border-gray-700"} `}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={status}
          onChange={() => dispatch(markCompleted(id))}
          className="w-5 h-5 accent-violet-500 cursor-pointer"
        />
        {isEditing ? (
          <input
            type="text"
            className="px-2 py-1 rounded-lg border border-gray-500 bg-gray-900 text-white focus:outline-none"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        ) : (
          <span className={`${status ? "line-through text-gray-400" : "text-white"} text-lg`}>
            {todoText}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
            onClick={handleUpdateTodo}
          >
            <FaSave />
          </button>
        ) : (
          <button
            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
            onClick={() => setIsEditing(true)}
          >
            <FaPencil />
          </button>
        )}

        <button
          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
          onClick={() => dispatch(removeTodo(id))}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  )
}

export default Todo
