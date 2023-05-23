import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    date: '',
    theatre: '',
    time: '',
    seats: '',
    movie: ''
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTheatre: (state, action) => {
      state.theatre = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setSeats: (state, action) => {
      state.seats = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    resetForm: (state) => {
      state.date = '';
      state.theatre = '';
      state.time = '';
      state.seats = '';
      state.movie = '';
    },
  },
});

export const { setDate, setTheatre, setTime, setSeats, setMovie, resetForm } = formSlice.actions;
export default formSlice.reducer;
