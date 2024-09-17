import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticketStatus: "",  
  difficultyLevel: "", 
  creationDateRange: "" 
};

const ticketStatusSlice = createSlice({
  name: 'ticketFilters',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.ticketStatus = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setCreatedTime: (state, action) => {
      state.createdTime = action.payload;
    },
  },
});

export const { setStatus, setDifficulty, setCreatedTime, resetFilters } = ticketStatusSlice.actions;

export const getFilters = (state) => state.filterStatus;

export default ticketStatusSlice.reducer;

