import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hellow World"},
            {id: 2, text: "Hellow Redux"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        } , //reduce state represent  the current values or state of initialState and action represents the some data which are passed to remove or add any todo which are required by us eg-id
        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },//reduce

        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo)=>
        //      todo.id === action.payload.id ? action.payload.text:todo)
        // },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer;
