// src/appointmentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    updateAppointment: (state, action) => {
      const index = action.payload.index;
      state[index] = action.payload.appointment;
    },
    deleteAppointment: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addAppointment, updateAppointment, deleteAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
