import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import articleReducer from '@/features/articles/articleSlice';
import { articleApi } from '@/services/articles/articleApi';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({}).concat([articleApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
