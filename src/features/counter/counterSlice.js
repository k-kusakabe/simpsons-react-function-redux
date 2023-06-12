import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = { search: "" };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSimpsons: (state, action) => {
      state.simpsons = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    deleteItem: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      state.simpsons.splice(indexOf, 1);
    },
    toggleLiked: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      //invert if liked or not liked
      state.simpsons[indexOf].liked = !state.simpsons[indexOf].liked;
    },
  },
});

export const {
  setSimpsons,
  deleteItem,
  toggleLiked,
  setSearch,
  setSort,
  increment,
  decrement,
  incrementByAmount,
} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectSimpsons = (state) => state.counter.simpsons;
export const selectSearch = (state) => state.counter.search;
export const selectSort = (state) => state.counter.sort;

export default counterSlice.reducer;
