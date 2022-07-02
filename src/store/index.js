import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Api } from "../services/api";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [authReducer.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  auth: authReducer,
  [Api.reducerPath]: Api.reducer
}))

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(Api.middleware)
  }
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)