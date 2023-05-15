import {configureStore} from '@reduxjs/toolkit';
import postReducer from './slice/posts';

export const store = configureStore({
    reducer:{
        post: postReducer,
    }
});