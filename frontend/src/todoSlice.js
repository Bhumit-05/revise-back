import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todos : null,
    },
    reducers : {
        addTodo : (state, action) => {
            state.todos = action.payload;
        },
        removeTodo : (state, action) => {
            return state.filter(todo => todo._id !== action.payload);
        }
    }
})

export default todoSlice.reducer;

export const { addTodo, removeTodo } = todoSlice.actions;