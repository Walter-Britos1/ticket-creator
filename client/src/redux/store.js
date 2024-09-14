import { configureStore } from '@reduxjs/toolkit';
import sliceTicket from './sliceTicket';

export const store = configureStore({
  reducer: {
    tickets: sliceTicket
  }
})