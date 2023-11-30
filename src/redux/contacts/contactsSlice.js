import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logOut } from 'redux/auth/operations';

const handlerPending = state => {
  state.error = false;
  state.isLoading = true;
};

const handlerRejected = state => {
  state.isLoading = false;
  state.error = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlerPending)
      .addCase(addContact.pending, handlerPending)
      .addCase(deleteContact.pending, handlerPending)
      .addCase(fetchContacts.rejected, handlerRejected)
      .addCase(addContact.rejected, handlerRejected)
      .addCase(deleteContact.rejected, handlerRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;

        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;

        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;

        const index = state.items.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
