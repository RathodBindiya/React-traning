import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async ({ limit, skip }) => {
  const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  const data = await response.json();
  return data;
});

const initialState = {
  authors: [],
  status: 'idle',
  error: null,
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.authors = action.payload.users;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authorsSlice.reducer;
