import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchImage } from './photoAPI';

const initialState = {
  selected: [],
  randomPhoto: [],
  loading: true
};

export const fetchRandomPhoto = createAsyncThunk(
  'photo/fetchImage',
  async () => {
    const data = await fetchImage();
    return data.response[0];
  }
);

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    approvedImage: (state, action) => {
      state.selected.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRandomPhoto.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.randomPhoto = action.payload;
      });
  }
});

export const { approvedImage, incrementByAmount } = photoSlice.actions;
export const getRandomPhoto = (state) => state.photo.randomPhoto;
export const getSelectedPhotos = (state) => state.photo.selected;

export default photoSlice.reducer;
