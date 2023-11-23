import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Title", content: "Content" },
  { id: 2, title: "Title2", content: "Content2" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title,content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        }
      }
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
