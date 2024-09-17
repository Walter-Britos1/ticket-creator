import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: []
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setAllTicket: (state, action) => {
      state.tickets = action.payload;
    },
  },
});

export const getAllTicket = (state) => state.ticket;

export const { setAllTicket } = ticketSlice.actions;

export default ticketSlice.reducer;