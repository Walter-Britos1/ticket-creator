import { configureStore } from '@reduxjs/toolkit';
import sliceTicket from './sliceTicket';
import filtersSlice from './sliceFilters';

export const store = configureStore({
  reducer: {
    tickets: sliceTicket,
    filterStatus: filtersSlice, 
  },
});
