import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import articleReducer from '@/features/articles/articleSlice';

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;