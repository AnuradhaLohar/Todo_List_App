import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {
  let dispatch = useDispatch()
  const [userInput, setUserInput] = useState("")

  const handleAddTodo = () => {
    if (userInput.trim() !== "") {
      dispatch(addTodo(userInput))
      setUserInput("")
    }
  }

  return (
    <div className="flex items-center gap-3 bg-gray-800 rounded-xl shadow-md p-4 mb-6">
      <input
        type="text"
        placeholder="✍️ Add a new task..."
        className="flex-1 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="px-5 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 text-white font-semibold shadow-lg transition-all"
      >
        Add
      </button>
    </div>
  )
}

export default AddTodo
