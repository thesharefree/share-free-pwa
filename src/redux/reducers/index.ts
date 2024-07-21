import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
import userReducer from './userReducer';
import postReducer from './postReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    group: groupReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
