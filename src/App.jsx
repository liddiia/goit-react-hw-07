

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiGetContacts } from "./redux/contactsOps";
import { Toaster, toast } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
 
  const dispatch = useDispatch()
  const isLoading = useSelector((state)=>state.contacts.loading)
  const error = useSelector((state)=>state.contacts.error)
 
  useEffect(()=>{ 
  
  dispatch(apiGetContacts())
  .unwrap()
  .then(() => {
    toast.success("The phonebook is loaded!");
  })
  .catch((error)=> {
    toast.error("Failed to download phonebook!");
  });
   },[dispatch]
)
 

  return (
    <div
      style={{

        display: "block",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
       <SearchBox   />  
   
      <ContactList />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#4dc31a",
            },
          },
          error: {
            icon: "❌",
            style: {
              background: "#c86b62",
            },
          },
        }}
      />
    </div>
  );
};

export default App;
