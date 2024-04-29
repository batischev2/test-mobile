import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/app/store';

const initialState = {
  articles: [],
  audio: []
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {}
});

export const {} = articleSlice.actions;

export const selectArticle = (state: RootState) => state.article;

export default articleSlice.reducer;
