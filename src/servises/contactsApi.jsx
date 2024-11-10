import axios from "axios";

axios.defaults.baseURL = "https://672fb37866e42ceaf15e7a2a.mockapi.io/";


export const getContacts = async () => {
  const respons = await axios.get('/contacts');
  return respons.data;
};

export const getContactsByFilters = async () => {
  const respons = await axios.get('/contacts');
  return respons.data;
};
