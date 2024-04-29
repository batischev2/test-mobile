import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';
import {fetchCount} from './articleAPI';

interface ArticleState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ArticleState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk<
  number,
  number,
  {state: {article: ArticleState}}
>('article/fetchCount', async (amount: number, {getState}) => {
  const {value} = getState().article;
  const response = await fetchCount(value, amount);
  return response.data;
});

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const {increment, decrement, incrementByAmount} = articleSlice.actions;

export const selectCount = (state: RootState) => state.article.value;

export default articleSlice.reducer;
