import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (skip) => {
    //console.log('skip = ',skip)
  const response = await fetch(`https://dummyjson.com/posts?limit=5&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts.');
  }
  const data = await response.json();
  //console.log('response',response);
  //console.log('data',data);
  return data;
});

export const fetchPostById = createAsyncThunk('post/fetchPostById', async (postId) => {
  //console.log('postId = ',postId)
const response = await fetch(`https://dummyjson.com/posts/${postId}`);
if (!response.ok) {
      throw new Error('Failed to fetch posts.');
    }
const data = await response.json();
//console.log('response',response);
//console.log('data',data);
return data;
});

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
  post:null
  
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.posts;
        
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
        //console.log('state.post =', state.post)
      })
      
  },
});

export default postSlice.reducer;
