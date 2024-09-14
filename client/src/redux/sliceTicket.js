import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [
    {
      id: 'ed98c745-d458-44a7-aef1-542f9346e8ee',
      name: 'Actualizar pc',
      description: 'Instalar nuevo sistema operativo',
      difficulty: 'hard',
      status: 'resolved',
      gifUrl: '',
      createdAt: '2024-09-12T23:21:12.823Z',
      updatedAt: '2024-09-12T23:24:21.173Z'
    },
    {
      id: '57a6107b-1166-451f-8011-0219befc0a31',
      name: 'Actualizar telefono',
      description: 'Instalar nueva version de android',
      difficulty: 'hard',
      status: 'in-progress',
      gifUrl: '',
      createdAt: '2024-09-13T00:43:52.972Z',
      updatedAt: '2024-09-13T00:43:52.972Z'
    }
  ]
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setAllTicket: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const getAllTicket = (state) => state.ticket;

export const { setAllTicket } = ticketSlice.actions;

export default ticketSlice.reducer;