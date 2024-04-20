import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

const host = "http://localhost:5000";

// const fetchNotes = async () => {
//     const response = await fetch('http://localhost:5000/api/notes/fetchall', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             "jwtData": localStorage.getItem('jwtData')
//         }
//     });
//     const data = await response.json();
//     return data;
// }

// export const getNotes = createAsyncThunk('todo/getNotes', async () => {
//     const notes = await fetchNotes();
//     return notes;
// });

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{ id: 1, text: "Hello world" }],
        img: '',
    },
    reducers: {
        addImg: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
