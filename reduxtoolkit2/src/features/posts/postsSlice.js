import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

// const initialState = [
//   {
//     id: 1,
//     title: "Title",
//     content: "Content",
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//   },
//   {
//     id: 2,
//     title: "Title2",
//     content: "Content2",
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//   },
// ];
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL)
    return [...response.data];

  } catch (err) {
    return err.message;
  }
})

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status='succeeded'

      let min = 1;
      const loadedPosts = action.payload.map(post => {
        post.date = sub(new Date(), {minutes: min++}).toISOString
        return posts;

      })
      state.posts = state.posts.concat(loadedPosts)

    })
    .addCase(fetchPosts.rejected , (state, action) =>{
      state.status = 'failed'
      state.error = action.error = action.error.message
    })
  }
});
// export const selectAllPosts = (state) => state.posts.posts;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStutus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
