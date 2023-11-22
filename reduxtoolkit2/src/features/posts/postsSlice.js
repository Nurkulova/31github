import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Title", content: "Content" },
  { id: 2, title: "Title2", content: "Content2" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state,action) {
        state.push(action.payload)
    }
  },
});
export const selectAllPosts = (state) => state.posts;
export const {postAdded} = postSlice.actions
export default postSlice.reducer;
