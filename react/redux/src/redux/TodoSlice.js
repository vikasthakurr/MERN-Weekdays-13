import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.push(newTodo);
    },

    updateTodo: (state, action) => {
      const { id, text, completed } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (!existingTodo) return;

      if (typeof text === "string") existingTodo.text = text;
      if (typeof completed === "boolean") existingTodo.completed = completed;
    },

    deleteTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    
    deleteAll: () => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
