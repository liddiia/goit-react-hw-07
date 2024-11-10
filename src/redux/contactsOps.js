import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://672fb37866e42ceaf15e7a2a.mockapi.io/";
export const apiGetContacts = createAsyncThunk(
    "phonbook/getContacts",
    async (_, thunkApi)=>{
        try{
        const data = await axios.get("/contacts");;
        return data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (newContact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", newContact);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );