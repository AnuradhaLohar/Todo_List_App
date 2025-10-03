import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:JSON.parse(localStorage.getItem("TodoApp"))  ||
    [
        {
            id: nanoid(),
            todoText: "hello",
            status: false
        },
       
    ]
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let obj = {
                id: nanoid(),
                todoText: action.payload,
                status: false
            }
            state.todos.push(obj)
            localStorage.setItem("TodoApp", JSON.stringify(state.todos))
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem("TodoApp",JSON.stringify(state.todos))
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        todoText: action.payload.userInput
                    }
                } else {
                    return todo
                }
            })
            localStorage.setItem("TodoApp",JSON.stringify(state.todos))


        },

        markCompleted: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        status: !todo.status
                    }
                } else {
                    return todo
                }
            })
        }
    }

})

export const { addTodo, removeTodo, updateTodo, markCompleted } = todoSlice.actions
export default todoSlice.reducer

