import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './reducers';
import { persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
    reducer: persistedReducer,
    // middleware: () => [thunk],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk, logger]),
});

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
