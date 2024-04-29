import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';

interface ArticleState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ArticleState = {
  value: 0,
  status: 'idle',
};

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
  }
});

export const {increment, decrement, incrementByAmount} = articleSlice.actions;

export const selectCount = (state: RootState) => state.article.value;

export default articleSlice.reducer;
