import './App.css'
import { TodoList } from './component'

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-950 shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-violet-400 tracking-wide">✨ My Todo List</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
