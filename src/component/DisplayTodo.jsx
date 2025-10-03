import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const DisplayTodo = () => {
  const allTodos = useSelector((state) => state.todo.todos)

  return (
    <div className="space-y-3">
      {allTodos.length === 0 ? (
        <p className="text-center text-gray-400">🚀 No tasks yet, add one above!</p>
      ) : (
        allTodos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))
      )}
    </div>
  )
}

export default DisplayTodo
