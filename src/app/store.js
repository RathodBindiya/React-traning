import { configureStore } from '@reduxjs/toolkit';
import authorsReducer from '../features/authorsSlice';
import postReducer from '../features/postsSlice';

export default configureStore({
  reducer: {
    authors: authorsReducer,
    post : postReducer
  },
});
