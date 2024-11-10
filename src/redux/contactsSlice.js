import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiGetContacts, addContacts, deleteContacts } from "./contactsOps";
import { filtersReducer } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

 const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(deleteContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.error = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default contactsSlice.reducer;

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilterContacts = createSelector(
  [selectContacts, filtersReducer],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
