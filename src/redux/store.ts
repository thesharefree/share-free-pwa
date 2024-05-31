import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
    reducer: rootReducer,
    // middleware: () => [thunk],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk, logger]),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
