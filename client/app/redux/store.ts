import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import thunk from 'redux-thunk';

import AuthReducer from './features/Auth/AuthSlice';

import { apiSlice } from './features/Api/LamakApiSlice';

const persistConfig = {
  key: 'root',
  storage,
  // blackList: [apiSlice.reducerPath]
};

const reducers = combineReducers({
  auth: AuthReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
});


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      thunk,
      apiSlice.middleware,
    ),

  // reducer: persistedReducer,
  //   middleware: [thunk],
  
  // reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: apiSlice.middleware
  //     },
  //     serializableCheck: false,
  //   });
  // }
  

  // reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(apiSlice.middleware);
  // }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;