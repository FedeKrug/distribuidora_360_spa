import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Slices
import authSlice from './auth/authSlice'

const appReducer = combineReducers({
    auth: authSlice
});



const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: persistReducer(persistConfig, appReducer),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

export const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
