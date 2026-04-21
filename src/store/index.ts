import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import {persistStore,persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import authReducer from './slices/authSlice';
import { authPersistConfig, counterPersistConfig } from "./persistConfig";

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  counter: persistReducer(counterPersistConfig, counterReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;