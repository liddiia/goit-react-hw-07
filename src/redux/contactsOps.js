import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://672fb37866e42ceaf15e7a2a.mockapi.io/";

export const apiGetContacts = createAsyncThunk(
    "phonbook/getContacts",
    async (_, { rejectWithValue })=>{
        try{
        const respons = await axios.get("/contacts");;
        return respons.data;
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, { rejectWithValue }) => {
      try {
        const response = await axios.post("/contacts", newContact);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId,{ rejectWithValue }) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

 